import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserType } from './dto/login.dto';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly users: UsersService, private readonly jwt: JwtService) {}

  async validateUser(email: string, password: string, userType?: UserType) {
    const user = await this.users.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    
    // Check user type authorization
    if (userType === UserType.ADMIN && user.role !== Role.SUPER_ADMIN) {
      throw new UnauthorizedException('Admin access required');
    }
    if (userType === UserType.CUSTOMER && user.role === Role.SUPER_ADMIN) {
      throw new UnauthorizedException('Customer access required');
    }
    
    const ok = await bcrypt.compare(password, (user as any).passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  async login(user: any) {
    const payload = { 
      sub: user.id, 
      role: user.role, 
      tenantId: user.tenantId ?? null, 
      email: user.email,
      name: user.name
    };
    const access_token = await this.jwt.signAsync(payload);
    return { 
      access_token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        tenantId: user.tenantId
      }
    };
  }
}
