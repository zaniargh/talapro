import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class GoldPriceService {
  private readonly logger = new Logger(GoldPriceService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getCurrentPrice(): Promise<number> {
    // Try to get the latest active price
    const latestPrice = await this.prisma.goldPrice.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });

    if (latestPrice) {
      return Number(latestPrice.pricePerGram);
    }

    // If no price exists, try to fetch from API
    try {
      const apiPrice = await this.fetchFromTehranAPI();
      if (apiPrice) {
        await this.updatePrice(apiPrice, 'api');
        return apiPrice;
      }
    } catch (error) {
      this.logger.error('Failed to fetch gold price from API', error);
    }

    // Fallback to a default price
    const defaultPrice = 3500000; // 3.5M Toman per gram
    await this.updatePrice(defaultPrice, 'manual');
    return defaultPrice;
  }

  async updateManualPrice(pricePerGram: number): Promise<void> {
    await this.updatePrice(pricePerGram, 'manual');
  }

  private async updatePrice(pricePerGram: number, source: 'api' | 'manual'): Promise<void> {
    // Deactivate all previous prices
    await this.prisma.goldPrice.updateMany({
      where: { isActive: true },
      data: { isActive: false },
    });

    // Create new active price
    await this.prisma.goldPrice.create({
      data: {
        pricePerGram,
        source,
        isActive: true,
      },
    });

    this.logger.log(`Gold price updated to ${pricePerGram} from ${source}`);
  }

  private async fetchFromTehranAPI(): Promise<number | null> {
    try {
      // This is a placeholder for Tehran gold price API
      // You would replace this with the actual API endpoint
      const response = await axios.get('https://api.example.com/gold-price', {
        timeout: 5000,
      });

      // Parse the response based on the actual API structure
      const pricePerGram = response.data?.price_per_gram;
      
      if (typeof pricePerGram === 'number' && pricePerGram > 0) {
        return pricePerGram;
      }

      return null;
    } catch (error) {
      this.logger.warn('Failed to fetch from Tehran API', error.message);
      return null;
    }
  }

  async getPriceHistory(limit: number = 30) {
    return this.prisma.goldPrice.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }
}
