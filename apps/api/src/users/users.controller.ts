import { Body, Controller, Get, Post, UseGuards, Req, ForbiddenException, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { Role } from '@prisma/client';

@Controller('customers')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createCustomer(@Body() dto: CreateCustomerDto, @Req() req: any) {
    console.log('[CreateCustomer] Request user:', req.user);
    console.log('[CreateCustomer] User role:', req.user?.role);
    console.log('[CreateCustomer] SUPER_ADMIN role:', Role.SUPER_ADMIN);
    
    // فقط سوپر ادمین می‌تواند مشتری ایجاد کند
    if (req.user?.role !== Role.SUPER_ADMIN) {
      console.log('[CreateCustomer] Access denied - not SUPER_ADMIN');
      throw new ForbiddenException('فقط مدیر کل سیستم می‌تواند مشتری ایجاد کند');
    }

    try {
      const user = await this.usersService.createUser({
        email: dto.email,
        name: dto.name,
        password: dto.password,
        role: Role.CUSTOMER,
        tenantId: dto.tenantId ?? null,
        phone: dto.phone || undefined,
        address: dto.address || undefined,
      });
      
      // Return user without passwordHash
      const { passwordHash, ...userWithoutPassword } = user as any;
      return userWithoutPassword;
    } catch (error: any) {
      // Handle Prisma unique constraint error
      if (error.code === 'P2002') {
        throw new ForbiddenException('این ایمیل قبلاً در سیستم ثبت شده است');
      }
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllCustomers(@Req() req: any) {
    // فقط سوپر ادمین می‌تواند لیست مشتریان را ببیند
    if (req.user.role !== Role.SUPER_ADMIN) {
      throw new ForbiddenException('فقط مدیر کل سیستم می‌تواند لیست مشتریان را ببیند');
    }

    return this.usersService.findAllCustomers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMyProfile(@Req() req: any) {
    // هر کاربر می‌تواند اطلاعات خودش را ببیند
    const user = await this.usersService.findById(req.user.sub);
    if (!user) {
      throw new ForbiddenException('کاربر یافت نشد');
    }
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getCustomerById(@Req() req: any, @Param('id') id: string) {
    // فقط سوپر ادمین می‌تواند اطلاعات هر مشتری را ببیند
    // یا مشتری می‌تواند اطلاعات خودش را ببیند
    if (req.user.role !== Role.SUPER_ADMIN && req.user.sub !== id) {
      throw new ForbiddenException('شما اجازه دسترسی به این اطلاعات را ندارید');
    }

    const user = await this.usersService.findById(id);
    if (!user) {
      throw new ForbiddenException('مشتری یافت نشد');
    }
    return user;
  }
}

