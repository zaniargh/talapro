import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserType } from './dto/login.dto';
export declare class AuthService {
    private readonly users;
    private readonly jwt;
    constructor(users: UsersService, jwt: JwtService);
    validateUser(email: string, password: string, userType?: UserType): Promise<{
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
    login(user: any): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            name: any;
            role: any;
            tenantId: any;
        };
    }>;
}
