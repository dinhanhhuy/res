import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryCreateDto } from './dto/category-create.dto';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@ApiTags('categories')
@Controller({
  path: 'categories',
  version: ['1'],
})
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({
    status: 201,
    description: 'Created a category',
    type: Category,
  })
  create(@Body() categoryCreateDto: CategoryCreateDto) {
    return this.categoryService.createAsync(categoryCreateDto);
  }
}
