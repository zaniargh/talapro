import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
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
    role?: any;
    tenantId?: string | null;
  }) {
    const hash = await bcrypt.hash(params.password, 10);
    return this.prisma.user.create({
      data: {
        email: params.email,
        name: params.name,
        role: (params.role as any) ?? ('TENANT_ADMIN' as any),
        passwordHash: hash,
        tenantId: params.tenantId ?? null,
      },
    });
  }
}
