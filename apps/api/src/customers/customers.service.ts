import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  // Customer Groups
  async getAllGroups(tenantId?: string) {
    return this.prisma.customerGroup.findMany({
      where: tenantId ? { tenantId } : {},
      orderBy: { createdAt: 'desc' },
    });
  }

  async getGroupById(id: string) {
    const group = await this.prisma.customerGroup.findUnique({
      where: { id },
      include: { customers: true },
    });
    if (!group) {
      throw new NotFoundException('گروه یافت نشد');
    }
    return group;
  }

  async createGroup(data: { name: string; description?: string; tenantId?: string }) {
    return this.prisma.customerGroup.create({
      data: {
        name: data.name,
        description: data.description,
        tenantId: data.tenantId ?? null,
      },
    });
  }

  async updateGroup(id: string, data: { name?: string; description?: string }) {
    return this.prisma.customerGroup.update({
      where: { id },
      data,
    });
  }

  async deleteGroup(id: string) {
    // حذف گروه و تنظیم groupId مشتریان به null
    await this.prisma.customer.updateMany({
      where: { groupId: id },
      data: { groupId: null },
    });
    return this.prisma.customerGroup.delete({
      where: { id },
    });
  }

  // Customers
  async getAllCustomers(tenantId?: string, groupId?: string) {
    return this.prisma.customer.findMany({
      where: {
        ...(tenantId && { tenantId }),
        ...(groupId && { groupId }),
      },
      include: {
        group: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getCustomerById(id: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      include: {
        group: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    if (!customer) {
      throw new NotFoundException('مشتری یافت نشد');
    }
    return customer;
  }

  async createCustomer(data: {
    name: string;
    groupId?: string;
    phone?: string;
    phone2?: string;
    phone3?: string;
    address?: string;
    nationalId?: string;
    tenantId?: string;
  }) {
    return this.prisma.customer.create({
      data: {
        name: data.name,
        groupId: data.groupId ?? null,
        phone: data.phone ?? null,
        phone2: data.phone2 ?? null,
        phone3: data.phone3 ?? null,
        address: data.address ?? null,
        nationalId: data.nationalId ?? null,
        tenantId: data.tenantId ?? null,
      },
      include: {
        group: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async updateCustomer(
    id: string,
    data: {
      name?: string;
      groupId?: string;
      phone?: string;
      phone2?: string;
      phone3?: string;
      address?: string;
      nationalId?: string;
    },
  ) {
    return this.prisma.customer.update({
      where: { id },
      data: {
        ...data,
        groupId: data.groupId ?? undefined,
      },
      include: {
        group: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async deleteCustomer(id: string) {
    return this.prisma.customer.delete({
      where: { id },
    });
  }
}

