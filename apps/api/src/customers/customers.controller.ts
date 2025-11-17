import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerGroupDto } from './dto/create-customer-group.dto';
import { UpdateCustomerGroupDto } from './dto/update-customer-group.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('store-customers')
@UseGuards(JwtAuthGuard)
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // Customer Groups
  @Get('groups')
  async getAllGroups(@Req() req: any) {
    const tenantId = req.user.tenantId;
    return this.customersService.getAllGroups(tenantId);
  }

  @Get('groups/:id')
  async getGroupById(@Param('id') id: string) {
    return this.customersService.getGroupById(id);
  }

  @Post('groups')
  async createGroup(@Body() dto: CreateCustomerGroupDto, @Req() req: any) {
    const tenantId = req.user.tenantId;
    return this.customersService.createGroup({
      ...dto,
      tenantId,
    });
  }

  @Put('groups/:id')
  async updateGroup(@Param('id') id: string, @Body() dto: UpdateCustomerGroupDto) {
    return this.customersService.updateGroup(id, dto);
  }

  @Delete('groups/:id')
  async deleteGroup(@Param('id') id: string) {
    return this.customersService.deleteGroup(id);
  }

  // Customers
  @Get()
  async getAllCustomers(@Query('groupId') groupId?: string, @Req() req?: any) {
    const tenantId = req?.user?.tenantId;
    return this.customersService.getAllCustomers(tenantId, groupId);
  }

  @Get(':id')
  async getCustomerById(@Param('id') id: string) {
    return this.customersService.getCustomerById(id);
  }

  @Post()
  async createCustomer(@Body() dto: CreateCustomerDto, @Req() req: any) {
    const tenantId = req.user.tenantId;
    return this.customersService.createCustomer({
      ...dto,
      tenantId,
    });
  }

  @Put(':id')
  async updateCustomer(@Param('id') id: string, @Body() dto: UpdateCustomerDto) {
    return this.customersService.updateCustomer(id, dto);
  }

  @Delete(':id')
  async deleteCustomer(@Param('id') id: string) {
    return this.customersService.deleteCustomer(id);
  }
}

