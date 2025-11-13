import { Module } from '@nestjs/common';
import { GoldPriceController } from './gold-price.controller';
import { GoldPriceService } from './gold-price.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GoldPriceController],
  providers: [GoldPriceService],
  exports: [GoldPriceService],
})
export class GoldPriceModule {}
