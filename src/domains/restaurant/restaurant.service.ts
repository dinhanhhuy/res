import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CategoryService } from '../category/category.service';
import { RestaurantCreateDto } from './dto/restaurant-create.dto';
import {RestaurantFilterDto} from './dto/restaurant-filter.dto';
import { RestaurantUpdateDto } from './dto/restaurant-update.dto';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
    private readonly categoryService: CategoryService,
  ) {}

  createAsync(restaurantCreateDto: RestaurantCreateDto): Promise<Restaurant> {
    const restaurant = new Restaurant();
    restaurant.name = restaurantCreateDto.name;
    restaurant.categoryIds = restaurantCreateDto.categoryIds;

    return this.restaurantRepository.save(restaurant);
  }

  async updateAsync(
    id: string,
    restaurantUpdateDto: RestaurantUpdateDto,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.findOne(id);
    if (restaurant == null) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Restaurant not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return this.restaurantRepository.save({
      ...restaurant,
      ...restaurantUpdateDto,
    });
  }

  getByCategoryIdsAsync(restaurantFilterDto: RestaurantFilterDto) {
    const categoryIds = Array.isArray(restaurantFilterDto.CategoryIds)
      ? restaurantFilterDto.CategoryIds
      : [restaurantFilterDto.CategoryIds];
    return this.restaurantRepository.find({
      where: {
        categoryIds: { $in: categoryIds },
      },
    });
  }
}
