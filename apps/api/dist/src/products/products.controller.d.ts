import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, ProductQueryDto, PriceSuggestionDto } from './dto/product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, files: Express.Multer.File[], req: any): Promise<{
        id: string;
        tenantId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        images: string[];
        karat: number;
        weight_gold_g: import("@prisma/client/runtime/library").Decimal;
        wage_gold: import("@prisma/client/runtime/library").Decimal;
        percent_from_gold: import("@prisma/client/runtime/library").Decimal;
        weight_stone_g: import("@prisma/client/runtime/library").Decimal;
        wage_stone: import("@prisma/client/runtime/library").Decimal;
        quantity: number;
    }>;
    findAll(query: ProductQueryDto, req: any): Promise<{
        products: ({
            tenant: {
                name: string;
                slug: string;
            };
        } & {
            id: string;
            tenantId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            sku: string | null;
            images: string[];
            karat: number;
            weight_gold_g: import("@prisma/client/runtime/library").Decimal;
            wage_gold: import("@prisma/client/runtime/library").Decimal;
            percent_from_gold: import("@prisma/client/runtime/library").Decimal;
            weight_stone_g: import("@prisma/client/runtime/library").Decimal;
            wage_stone: import("@prisma/client/runtime/library").Decimal;
            quantity: number;
        })[];
        total: number;
    }>;
    getSuggestions(query: PriceSuggestionDto, req: any): Promise<{
        calculatedPrice: number;
        priceDifference: number;
        tenant: {
            name: string;
            slug: string;
        };
        id: string;
        tenantId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        images: string[];
        karat: number;
        weight_gold_g: import("@prisma/client/runtime/library").Decimal;
        wage_gold: import("@prisma/client/runtime/library").Decimal;
        percent_from_gold: import("@prisma/client/runtime/library").Decimal;
        weight_stone_g: import("@prisma/client/runtime/library").Decimal;
        wage_stone: import("@prisma/client/runtime/library").Decimal;
        quantity: number;
    }[]>;
    findOne(id: string, req: any): Promise<{
        tenant: {
            name: string;
            slug: string;
        };
    } & {
        id: string;
        tenantId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        images: string[];
        karat: number;
        weight_gold_g: import("@prisma/client/runtime/library").Decimal;
        wage_gold: import("@prisma/client/runtime/library").Decimal;
        percent_from_gold: import("@prisma/client/runtime/library").Decimal;
        weight_stone_g: import("@prisma/client/runtime/library").Decimal;
        wage_stone: import("@prisma/client/runtime/library").Decimal;
        quantity: number;
    }>;
    update(id: string, updateProductDto: UpdateProductDto, files: Express.Multer.File[], req: any): Promise<{
        id: string;
        tenantId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        images: string[];
        karat: number;
        weight_gold_g: import("@prisma/client/runtime/library").Decimal;
        wage_gold: import("@prisma/client/runtime/library").Decimal;
        percent_from_gold: import("@prisma/client/runtime/library").Decimal;
        weight_stone_g: import("@prisma/client/runtime/library").Decimal;
        wage_stone: import("@prisma/client/runtime/library").Decimal;
        quantity: number;
    }>;
    remove(id: string, req: any): Promise<{
        id: string;
        tenantId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sku: string | null;
        images: string[];
        karat: number;
        weight_gold_g: import("@prisma/client/runtime/library").Decimal;
        wage_gold: import("@prisma/client/runtime/library").Decimal;
        percent_from_gold: import("@prisma/client/runtime/library").Decimal;
        weight_stone_g: import("@prisma/client/runtime/library").Decimal;
        wage_stone: import("@prisma/client/runtime/library").Decimal;
        quantity: number;
    }>;
}
