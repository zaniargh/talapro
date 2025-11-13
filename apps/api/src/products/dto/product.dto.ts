import { IsString, IsNumber, IsOptional, IsArray, Min, Max, IsInt } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  sku?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsInt()
  @Min(1)
  @Max(24)
  karat: number;

  @IsNumber({ maxDecimalPlaces: 3 })
  @Min(0)
  weight_gold_g: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  wage_gold: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(100)
  percent_from_gold: number;

  @IsNumber({ maxDecimalPlaces: 3 })
  @Min(0)
  weight_stone_g: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  wage_stone: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number = 1;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  sku?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(24)
  karat?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 3 })
  @Min(0)
  weight_gold_g?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  wage_gold?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(100)
  percent_from_gold?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 3 })
  @Min(0)
  weight_stone_g?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  wage_stone?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;
}

export class ProductQueryDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(0)
  skip?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  @Max(100)
  take?: number;
}

export class PriceSuggestionDto {
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @Min(0)
  targetPrice: number;

  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @Min(0)
  range?: number = 5000000;
}
