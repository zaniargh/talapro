import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        tenantId: string | null;
        role: import("@prisma/client").$Enums.Role;
        name: string;
        passwordHash: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createUser(params: {
        email: string;
        name: string;
        password: string;
        role?: Role;
        tenantId?: string | null;
        phone?: string;
        address?: string;
    }): Promise<{
        id: string;
        email: string;
        tenantId: string | null;
        role: import("@prisma/client").$Enums.Role;
        name: string;
        passwordHash: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAllCustomers(): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        tenant: {
            id: string;
            name: string;
            slug: string;
        } | null;
    }[]>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        tenant: {
            id: string;
            name: string;
            slug: string;
        } | null;
    } | null>;
}
