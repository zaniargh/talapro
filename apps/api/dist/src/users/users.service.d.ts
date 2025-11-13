import { PrismaService } from '../prisma/prisma.service';
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
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createUser(params: {
        email: string;
        name: string;
        password: string;
        role?: any;
        tenantId?: string | null;
    }): Promise<{
        id: string;
        email: string;
        tenantId: string | null;
        role: import("@prisma/client").$Enums.Role;
        name: string;
        passwordHash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
