"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_customer_dto_1 = require("./dto/create-customer.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
const client_1 = require("@prisma/client");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createCustomer(dto, req) {
        console.log('[CreateCustomer] Request user:', req.user);
        console.log('[CreateCustomer] User role:', req.user?.role);
        console.log('[CreateCustomer] SUPER_ADMIN role:', client_1.Role.SUPER_ADMIN);
        if (req.user?.role !== client_1.Role.SUPER_ADMIN) {
            console.log('[CreateCustomer] Access denied - not SUPER_ADMIN');
            throw new common_1.ForbiddenException('فقط مدیر کل سیستم می‌تواند مشتری ایجاد کند');
        }
        try {
            const user = await this.usersService.createUser({
                email: dto.email,
                name: dto.name,
                password: dto.password,
                role: client_1.Role.CUSTOMER,
                tenantId: dto.tenantId ?? null,
                phone: dto.phone || undefined,
                address: dto.address || undefined,
            });
            const { passwordHash, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.ForbiddenException('این ایمیل قبلاً در سیستم ثبت شده است');
            }
            throw error;
        }
    }
    async getAllCustomers(req) {
        if (req.user.role !== client_1.Role.SUPER_ADMIN) {
            throw new common_1.ForbiddenException('فقط مدیر کل سیستم می‌تواند لیست مشتریان را ببیند');
        }
        return this.usersService.findAllCustomers();
    }
    async getMyProfile(req) {
        const user = await this.usersService.findById(req.user.sub);
        if (!user) {
            throw new common_1.ForbiddenException('کاربر یافت نشد');
        }
        return user;
    }
    async getCustomerById(req, id) {
        if (req.user.role !== client_1.Role.SUPER_ADMIN && req.user.sub !== id) {
            throw new common_1.ForbiddenException('شما اجازه دسترسی به این اطلاعات را ندارید');
        }
        const user = await this.usersService.findById(id);
        if (!user) {
            throw new common_1.ForbiddenException('مشتری یافت نشد');
        }
        return user;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllCustomers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMyProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCustomerById", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map