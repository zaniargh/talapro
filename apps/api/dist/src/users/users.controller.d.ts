import { UsersService } from './users.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createCustomer(dto: CreateCustomerDto, req: any): Promise<any>;
    getAllCustomers(req: any): Promise<{
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
    getMyProfile(req: any): Promise<{
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
    }>;
    getCustomerById(req: any, id: string): Promise<{
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
    }>;
}
