export declare class CreateProductDto {
    name: string;
    sku?: string;
    images?: string[];
    karat: number;
    weight_gold_g: number;
    wage_gold: number;
    percent_from_gold: number;
    weight_stone_g: number;
    wage_stone: number;
    quantity?: number;
}
export declare class UpdateProductDto {
    name?: string;
    sku?: string;
    images?: string[];
    karat?: number;
    weight_gold_g?: number;
    wage_gold?: number;
    percent_from_gold?: number;
    weight_stone_g?: number;
    wage_stone?: number;
    quantity?: number;
}
export declare class ProductQueryDto {
    search?: string;
    tenantId?: string;
    skip?: number;
    take?: number;
}
export declare class PriceSuggestionDto {
    targetPrice: number;
    range?: number;
}
