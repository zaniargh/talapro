import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(params: {
    email: string;
    name: string;
    password: string;
    role?: Role;
    tenantId?: string | null;
    phone?: string;
    address?: string;
  }) {
    const hash = await bcrypt.hash(params.password, 10);
    return this.prisma.user.create({
      data: {
        email: params.email,
        name: params.name,
        role: params.role ?? Role.CUSTOMER,
        passwordHash: hash,
        tenantId: params.tenantId ?? null,
        phone: params.phone ?? null,
        address: params.address ?? null,
      },
    });
  }

  async findAllCustomers() {
    return this.prisma.user.findMany({
      where: {
        role: Role.CUSTOMER,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        address: true,
        createdAt: true,
        tenant: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        address: true,
        createdAt: true,
        role: true,
        tenant: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  }
}
