import { PrismaService } from '../prisma/prisma.service';
export declare class GoldPriceService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    getCurrentPrice(): Promise<number>;
    updateManualPrice(pricePerGram: number): Promise<void>;
    private updatePrice;
    private fetchFromTehranAPI;
    getPriceHistory(limit?: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        pricePerGram: import("@prisma/client/runtime/library").Decimal;
        source: string;
        isActive: boolean;
    }[]>;
}
