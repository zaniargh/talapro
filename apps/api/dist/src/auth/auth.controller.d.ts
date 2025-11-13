import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private readonly auth;
    private readonly users;
    constructor(auth: AuthService, users: UsersService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            name: any;
            role: any;
            tenantId: any;
        };
    }>;
    register(dto: RegisterDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            name: any;
            role: any;
            tenantId: any;
        };
    }>;
    me(req: any): Promise<any>;
}
