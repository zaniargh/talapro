import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './jwt.guard';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService, private readonly users: UsersService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.auth.validateUser(dto.email, dto.password, dto.userType);
    return this.auth.login(user);
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const user = await this.users.createUser({
      email: dto.email,
      name: dto.name,
      password: dto.password,
      tenantId: dto.tenantId ?? null,
    });
    return this.auth.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Req() req: any) {
    return req.user;
  }
}
