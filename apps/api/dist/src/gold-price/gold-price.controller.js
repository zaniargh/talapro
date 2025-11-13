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
exports.GoldPriceController = void 0;
const common_1 = require("@nestjs/common");
const gold_price_service_1 = require("./gold-price.service");
const jwt_guard_1 = require("../auth/jwt.guard");
const class_validator_1 = require("class-validator");
class UpdateGoldPriceDto {
    price;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateGoldPriceDto.prototype, "price", void 0);
let GoldPriceController = class GoldPriceController {
    goldPriceService;
    constructor(goldPriceService) {
        this.goldPriceService = goldPriceService;
    }
    async getCurrentPrice() {
        const price = await this.goldPriceService.getCurrentPrice();
        return { pricePerGram: price };
    }
    async updateManualPrice(dto) {
        await this.goldPriceService.updateManualPrice(dto.price);
        return { message: 'Gold price updated successfully' };
    }
    async getPriceHistory(limit) {
        const limitNum = limit ? parseInt(limit, 10) : 30;
        return this.goldPriceService.getPriceHistory(limitNum);
    }
};
exports.GoldPriceController = GoldPriceController;
__decorate([
    (0, common_1.Get)('current'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoldPriceController.prototype, "getCurrentPrice", null);
__decorate([
    (0, common_1.Post)('manual'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateGoldPriceDto]),
    __metadata("design:returntype", Promise)
], GoldPriceController.prototype, "updateManualPrice", null);
__decorate([
    (0, common_1.Get)('history'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoldPriceController.prototype, "getPriceHistory", null);
exports.GoldPriceController = GoldPriceController = __decorate([
    (0, common_1.Controller)('gold-price'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [gold_price_service_1.GoldPriceService])
], GoldPriceController);
//# sourceMappingURL=gold-price.controller.js.map