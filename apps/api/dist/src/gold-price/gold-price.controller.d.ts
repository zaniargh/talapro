import { GoldPriceService } from './gold-price.service';
declare class UpdateGoldPriceDto {
    price: number;
}
export declare class GoldPriceController {
    private readonly goldPriceService;
    constructor(goldPriceService: GoldPriceService);
    getCurrentPrice(): Promise<{
        pricePerGram: number;
    }>;
    updateManualPrice(dto: UpdateGoldPriceDto): Promise<{
        message: string;
    }>;
    getPriceHistory(limit?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        pricePerGram: import("@prisma/client/runtime/library").Decimal;
        source: string;
        isActive: boolean;
    }[]>;
}
export {};
