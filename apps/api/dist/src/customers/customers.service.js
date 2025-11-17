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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CustomersService = class CustomersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllGroups(tenantId) {
        return this.prisma.customerGroup.findMany({
            where: tenantId ? { tenantId } : {},
            orderBy: { createdAt: 'desc' },
        });
    }
    async getGroupById(id) {
        const group = await this.prisma.customerGroup.findUnique({
            where: { id },
            include: { customers: true },
        });
        if (!group) {
            throw new common_1.NotFoundException('گروه یافت نشد');
        }
        return group;
    }
    async createGroup(data) {
        return this.prisma.customerGroup.create({
            data: {
                name: data.name,
                description: data.description,
                tenantId: data.tenantId ?? null,
            },
        });
    }
    async updateGroup(id, data) {
        return this.prisma.customerGroup.update({
            where: { id },
            data,
        });
    }
    async deleteGroup(id) {
        await this.prisma.customer.updateMany({
            where: { groupId: id },
            data: { groupId: null },
        });
        return this.prisma.customerGroup.delete({
            where: { id },
        });
    }
    async getAllCustomers(tenantId, groupId) {
        return this.prisma.customer.findMany({
            where: {
                ...(tenantId && { tenantId }),
                ...(groupId && { groupId }),
            },
            include: {
                group: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getCustomerById(id) {
        const customer = await this.prisma.customer.findUnique({
            where: { id },
            include: {
                group: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        if (!customer) {
            throw new common_1.NotFoundException('مشتری یافت نشد');
        }
        return customer;
    }
    async createCustomer(data) {
        return this.prisma.customer.create({
            data: {
                name: data.name,
                groupId: data.groupId ?? null,
                phone: data.phone ?? null,
                phone2: data.phone2 ?? null,
                phone3: data.phone3 ?? null,
                address: data.address ?? null,
                nationalId: data.nationalId ?? null,
                tenantId: data.tenantId ?? null,
            },
            include: {
                group: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
    async updateCustomer(id, data) {
        return this.prisma.customer.update({
            where: { id },
            data: {
                ...data,
                groupId: data.groupId ?? undefined,
            },
            include: {
                group: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
    async deleteCustomer(id) {
        return this.prisma.customer.delete({
            where: { id },
        });
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomersService);
//# sourceMappingURL=customers.service.js.map