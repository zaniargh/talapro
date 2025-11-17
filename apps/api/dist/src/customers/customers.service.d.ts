import { PrismaService } from '../prisma/prisma.service';
export declare class CustomersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllGroups(tenantId?: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getGroupById(id: string): Promise<{
        customers: {
            id: string;
            name: string;
            tenantId: string | null;
            createdAt: Date;
            updatedAt: Date;
            groupId: string | null;
            phone: string | null;
            phone2: string | null;
            phone3: string | null;
            address: string | null;
            nationalId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        description: string | null;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createGroup(data: {
        name: string;
        description?: string;
        tenantId?: string;
    }): Promise<{
        id: string;
        name: string;
        description: string | null;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateGroup(id: string, data: {
        name?: string;
        description?: string;
    }): Promise<{
        id: string;
        name: string;
        description: string | null;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteGroup(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllCustomers(tenantId?: string, groupId?: string): Promise<({
        group: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        name: string;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
        groupId: string | null;
        phone: string | null;
        phone2: string | null;
        phone3: string | null;
        address: string | null;
        nationalId: string | null;
    })[]>;
    getCustomerById(id: string): Promise<{
        group: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        name: string;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
        groupId: string | null;
        phone: string | null;
        phone2: string | null;
        phone3: string | null;
        address: string | null;
        nationalId: string | null;
    }>;
    createCustomer(data: {
        name: string;
        groupId?: string;
        phone?: string;
        phone2?: string;
        phone3?: string;
        address?: string;
        nationalId?: string;
        tenantId?: string;
    }): Promise<{
        group: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        name: string;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
        groupId: string | null;
        phone: string | null;
        phone2: string | null;
        phone3: string | null;
        address: string | null;
        nationalId: string | null;
    }>;
    updateCustomer(id: string, data: {
        name?: string;
        groupId?: string;
        phone?: string;
        phone2?: string;
        phone3?: string;
        address?: string;
        nationalId?: string;
    }): Promise<{
        group: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        name: string;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
        groupId: string | null;
        phone: string | null;
        phone2: string | null;
        phone3: string | null;
        address: string | null;
        nationalId: string | null;
    }>;
    deleteCustomer(id: string): Promise<{
        id: string;
        name: string;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
        groupId: string | null;
        phone: string | null;
        phone2: string | null;
        phone3: string | null;
        address: string | null;
        nationalId: string | null;
    }>;
}
