import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, ProductQueryDto, PriceSuggestionDto } from './dto/product.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 10))
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() files: Express.Multer.File[],
    @Req() req: any
  ) {
    // Handle file uploads here (we'll implement MinIO upload later)
    const imageUrls = files?.map(file => `/uploads/${file.filename}`) || [];
    
    return this.productsService.create(
      { ...createProductDto, images: imageUrls },
      req.user.sub,
      req.user.role,
      req.user.tenantId
    );
  }

  @Get()
  findAll(@Query() query: ProductQueryDto, @Req() req: any) {
    return this.productsService.findAll(
      query,
      req.user.sub,
      req.user.role,
      req.user.tenantId
    );
  }

  @Get('suggestions')
  getSuggestions(@Query() query: PriceSuggestionDto, @Req() req: any) {
    return this.productsService.getSuggestions(
      query.targetPrice,
      query.range,
      req.user.sub,
      req.user.role,
      req.user.tenantId
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.productsService.findOne(
      id,
      req.user.sub,
      req.user.role,
      req.user.tenantId
    );
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('images', 10))
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @UploadedFiles() files: Express.Multer.File[],
    @Req() req: any
  ) {
    // Handle file uploads here
    if (files && files.length > 0) {
      const imageUrls = files.map(file => `/uploads/${file.filename}`);
      updateProductDto.images = imageUrls;
    }

    return this.productsService.update(
      id,
      updateProductDto,
      req.user.sub,
      req.user.role,
      req.user.tenantId
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.productsService.remove(
      id,
      req.user.sub,
      req.user.role,
      req.user.tenantId
    );
  }
}
