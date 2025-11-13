import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto, ProductQueryDto } from './dto/product.dto';
import { Role } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto, userId: string, userRole: Role, userTenantId?: string) {
    // Only customers can create products in their own tenant
    if (userRole === Role.SUPER_ADMIN) {
      throw new ForbiddenException('Super admin cannot create products directly');
    }

    if (!userTenantId) {
      throw new ForbiddenException('User must belong to a tenant to create products');
    }

    return this.prisma.product.create({
      data: {
        ...createProductDto,
        tenantId: userTenantId,
        images: createProductDto.images || [],
      },
    });
  }

  async findAll(query: ProductQueryDto, userId: string, userRole: Role, userTenantId?: string) {
    const where: any = {};

    // Super admin can see all products, customers only their own
    if (userRole !== Role.SUPER_ADMIN) {
      if (!userTenantId) {
        throw new ForbiddenException('Access denied');
      }
      where.tenantId = userTenantId;
    } else if (query.tenantId) {
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

  async findOne(id: string, userId: string, userRole: Role, userTenantId?: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        tenant: {
          select: { name: true, slug: true }
        }
      }
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // Check access permissions
    if (userRole !== Role.SUPER_ADMIN && product.tenantId !== userTenantId) {
      throw new ForbiddenException('Access denied');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto, userId: string, userRole: Role, userTenantId?: string) {
    const product = await this.findOne(id, userId, userRole, userTenantId);

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string, userId: string, userRole: Role, userTenantId?: string) {
    const product = await this.findOne(id, userId, userRole, userTenantId);

    return this.prisma.product.delete({
      where: { id },
    });
  }

  async getSuggestions(targetPrice: number, range: number = 5000000, userId: string, userRole: Role, userTenantId?: string) {
    const where: any = {};

    // Apply tenant filtering
    if (userRole !== Role.SUPER_ADMIN) {
      if (!userTenantId) {
        throw new ForbiddenException('Access denied');
      }
      where.tenantId = userTenantId;
    }

    // Get current gold price (we'll implement this later)
    const currentGoldPrice = 3500000; // Placeholder - should come from GoldPrice table

    const products = await this.prisma.product.findMany({
      where,
      include: {
        tenant: {
          select: { name: true, slug: true }
        }
      }
    });

    // Calculate prices and filter by range
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
}
