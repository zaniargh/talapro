"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto, userId, userRole, userTenantId) {
        if (userRole === client_1.Role.SUPER_ADMIN) {
            throw new common_1.ForbiddenException('Super admin cannot create products directly');
        }
        if (!userTenantId) {
            throw new common_1.ForbiddenException('User must belong to a tenant to create products');
        }
        return this.prisma.product.create({
            data: {
                ...createProductDto,
                tenantId: userTenantId,
                images: createProductDto.images || [],
            },
        });
    }
    async findAll(query, userId, userRole, userTenantId) {
        const where = {};
        if (userRole !== client_1.Role.SUPER_ADMIN) {
            if (!userTenantId) {
                throw new common_1.ForbiddenException('Access denied');
            }
            where.tenantId = userTenantId;
        }
        else if (query.tenantId) {
            where.tenantId = query.tenantId;
        }
        if (query.search) {
            where.OR = [
                { name: { contains: query.search, mode: 'insensitive' } },
                { sku: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        const [products, total] = await Promise.all([
            this.prisma.product.findMany({
                where,
                skip: query.skip || 0,
                take: query.take || 20,
                orderBy: { createdAt: 'desc' },
                include: {
                    tenant: {
                        select: { name: true, slug: true }
                    }
                }
            }),
            this.prisma.product.count({ where }),
        ]);
        return { products, total };
    }
    async findOne(id, userId, userRole, userTenantId) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: {
                tenant: {
                    select: { name: true, slug: true }
                }
            }
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        if (userRole !== client_1.Role.SUPER_ADMIN && product.tenantId !== userTenantId) {
            throw new common_1.ForbiddenException('Access denied');
        }
        return product;
    }
    async update(id, updateProductDto, userId, userRole, userTenantId) {
        const product = await this.findOne(id, userId, userRole, userTenantId);
        return this.prisma.product.update({
            where: { id },
            data: updateProductDto,
        });
    }
    async remove(id, userId, userRole, userTenantId) {
        const product = await this.findOne(id, userId, userRole, userTenantId);
        return this.prisma.product.delete({
            where: { id },
        });
    }
    async getSuggestions(targetPrice, range = 5000000, userId, userRole, userTenantId) {
        const where = {};
        if (userRole !== client_1.Role.SUPER_ADMIN) {
            if (!userTenantId) {
                throw new common_1.ForbiddenException('Access denied');
            }
            where.tenantId = userTenantId;
        }
        const currentGoldPrice = 3500000;
        const products = await this.prisma.product.findMany({
            where,
            include: {
                tenant: {
                    select: { name: true, slug: true }
                }
            }
        });
        const suggestions = products
            .map(product => {
            const pureGoldWeight = (Number(product.weight_gold_g) * product.karat) / 24;
            const goldValue = pureGoldWeight * currentGoldPrice;
            const wageAmount = (goldValue * Number(product.percent_from_gold)) / 100 + Number(product.wage_gold);
            const stoneValue = Number(product.weight_stone_g) * Number(product.wage_stone);
            const totalPrice = goldValue + wageAmount + stoneValue;
            return {
                ...product,
                calculatedPrice: totalPrice,
                priceDifference: Math.abs(totalPrice - targetPrice)
            };
        })
            .filter(product => product.priceDifference <= range)
            .sort((a, b) => a.priceDifference - b.priceDifference);
        return suggestions;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map