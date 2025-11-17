import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerGroupDto } from './dto/create-customer-group.dto';
import { UpdateCustomerGroupDto } from './dto/update-customer-group.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    getAllGroups(req: any): Promise<{
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
    createGroup(dto: CreateCustomerGroupDto, req: any): Promise<{
        id: string;
        name: string;
        description: string | null;
        tenantId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateGroup(id: string, dto: UpdateCustomerGroupDto): Promise<{
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
    getAllCustomers(groupId?: string, req?: any): Promise<({
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
    createCustomer(dto: CreateCustomerDto, req: any): Promise<{
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
    updateCustomer(id: string, dto: UpdateCustomerDto): Promise<{
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
