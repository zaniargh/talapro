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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var GoldPriceService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldPriceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const axios_1 = __importDefault(require("axios"));
let GoldPriceService = GoldPriceService_1 = class GoldPriceService {
    prisma;
    logger = new common_1.Logger(GoldPriceService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCurrentPrice() {
        const latestPrice = await this.prisma.goldPrice.findFirst({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' },
        });
        if (latestPrice) {
            return Number(latestPrice.pricePerGram);
        }
        try {
            const apiPrice = await this.fetchFromTehranAPI();
            if (apiPrice) {
                await this.updatePrice(apiPrice, 'api');
                return apiPrice;
            }
        }
        catch (error) {
            this.logger.error('Failed to fetch gold price from API', error);
        }
        const defaultPrice = 3500000;
        await this.updatePrice(defaultPrice, 'manual');
        return defaultPrice;
    }
    async updateManualPrice(pricePerGram) {
        await this.updatePrice(pricePerGram, 'manual');
    }
    async updatePrice(pricePerGram, source) {
        await this.prisma.goldPrice.updateMany({
            where: { isActive: true },
            data: { isActive: false },
        });
        await this.prisma.goldPrice.create({
            data: {
                pricePerGram,
                source,
                isActive: true,
            },
        });
        this.logger.log(`Gold price updated to ${pricePerGram} from ${source}`);
    }
    async fetchFromTehranAPI() {
        try {
            const response = await axios_1.default.get('https://api.example.com/gold-price', {
                timeout: 5000,
            });
            const pricePerGram = response.data?.price_per_gram;
            if (typeof pricePerGram === 'number' && pricePerGram > 0) {
                return pricePerGram;
            }
            return null;
        }
        catch (error) {
            this.logger.warn('Failed to fetch from Tehran API', error.message);
            return null;
        }
    }
    async getPriceHistory(limit = 30) {
        return this.prisma.goldPrice.findMany({
            orderBy: { createdAt: 'desc' },
            take: limit,
        });
    }
};
exports.GoldPriceService = GoldPriceService;
exports.GoldPriceService = GoldPriceService = GoldPriceService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GoldPriceService);
//# sourceMappingURL=gold-price.service.js.map