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
exports.CustomersController = void 0;
const common_1 = require("@nestjs/common");
const customers_service_1 = require("./customers.service");
const create_customer_dto_1 = require("./dto/create-customer.dto");
const update_customer_dto_1 = require("./dto/update-customer.dto");
const create_customer_group_dto_1 = require("./dto/create-customer-group.dto");
const update_customer_group_dto_1 = require("./dto/update-customer-group.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
let CustomersController = class CustomersController {
    customersService;
    constructor(customersService) {
        this.customersService = customersService;
    }
    async getAllGroups(req) {
        const tenantId = req.user.tenantId;
        return this.customersService.getAllGroups(tenantId);
    }
    async getGroupById(id) {
        return this.customersService.getGroupById(id);
    }
    async createGroup(dto, req) {
        const tenantId = req.user.tenantId;
        return this.customersService.createGroup({
            ...dto,
            tenantId,
        });
    }
    async updateGroup(id, dto) {
        return this.customersService.updateGroup(id, dto);
    }
    async deleteGroup(id) {
        return this.customersService.deleteGroup(id);
    }
    async getAllCustomers(groupId, req) {
        const tenantId = req?.user?.tenantId;
        return this.customersService.getAllCustomers(tenantId, groupId);
    }
    async getCustomerById(id) {
        return this.customersService.getCustomerById(id);
    }
    async createCustomer(dto, req) {
        const tenantId = req.user.tenantId;
        return this.customersService.createCustomer({
            ...dto,
            tenantId,
        });
    }
    async updateCustomer(id, dto) {
        return this.customersService.updateCustomer(id, dto);
    }
    async deleteCustomer(id) {
        return this.customersService.deleteCustomer(id);
    }
};
exports.CustomersController = CustomersController;
__decorate([
    (0, common_1.Get)('groups'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getAllGroups", null);
__decorate([
    (0, common_1.Get)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getGroupById", null);
__decorate([
    (0, common_1.Post)('groups'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_group_dto_1.CreateCustomerGroupDto, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Put)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_customer_group_dto_1.UpdateCustomerGroupDto]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateGroup", null);
__decorate([
    (0, common_1.Delete)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "deleteGroup", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('groupId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getAllCustomers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getCustomerById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_customer_dto_1.UpdateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateCustomer", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "deleteCustomer", null);
exports.CustomersController = CustomersController = __decorate([
    (0, common_1.Controller)('store-customers'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersController);
//# sourceMappingURL=customers.controller.js.map