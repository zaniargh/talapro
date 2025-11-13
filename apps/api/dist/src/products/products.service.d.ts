import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto, ProductQueryDto } from './dto/product.dto';
import { Role } from '@prisma/client';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto, userId: string, userRole: Role, userTenantId?: string): Promise<{
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
    findAll(query: ProductQueryDto, userId: string, userRole: Role, userTenantId?: string): Promise<{
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
    findOne(id: string, userId: string, userRole: Role, userTenantId?: string): Promise<{
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
    update(id: string, updateProductDto: UpdateProductDto, userId: string, userRole: Role, userTenantId?: string): Promise<{
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
    remove(id: string, userId: string, userRole: Role, userTenantId?: string): Promise<{
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
    getSuggestions(targetPrice: number, range: number | undefined, userId: string, userRole: Role, userTenantId?: string): Promise<{
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
}
