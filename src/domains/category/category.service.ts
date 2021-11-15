import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CategoryCreateDto } from './dto/category-create.dto';
import { Category } from './category.entity';
import {In} from 'typeorm/find-options/operator/In';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  createAsync(categoryCreateDto: CategoryCreateDto): Promise<Category> {
    const category = new Category();
    category.name = categoryCreateDto.name;
    category.status = categoryCreateDto.status;

    return this.categoryRepository.save(category);
  }
}
