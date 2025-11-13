import { Controller, Get, Post, Body, UseGuards, Query } from '@nestjs/common';
import { GoldPriceService } from './gold-price.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { IsNumber, Min } from 'class-validator';

class UpdateGoldPriceDto {
  @IsNumber()
  @Min(0)
  price: number;
}

@Controller('gold-price')
@UseGuards(JwtAuthGuard)
export class GoldPriceController {
  constructor(private readonly goldPriceService: GoldPriceService) {}

  @Get('current')
  async getCurrentPrice() {
    const price = await this.goldPriceService.getCurrentPrice();
    return { pricePerGram: price };
  }

  @Post('manual')
  async updateManualPrice(@Body() dto: UpdateGoldPriceDto) {
    await this.goldPriceService.updateManualPrice(dto.price);
    return { message: 'Gold price updated successfully' };
  }

  @Get('history')
  async getPriceHistory(@Query('limit') limit?: string) {
    const limitNum = limit ? parseInt(limit, 10) : 30;
    return this.goldPriceService.getPriceHistory(limitNum);
  }
}
