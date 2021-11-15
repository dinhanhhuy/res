import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RestaurantCreateDto } from './dto/restaurant-create.dto';
import {RestaurantFilterDto} from './dto/restaurant-filter.dto';
import {RestaurantUpdateDto} from './dto/restaurant-update.dto';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';

@ApiTags('restaurants')
@Controller({
  path: 'restaurants',
  version: ['1'],
})
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a restaurant' })
  @ApiResponse({
    status: 201,
    description: 'Created a restaurant',
    type: Restaurant,
  })
  create(@Body() restaurantCreateDto: RestaurantCreateDto) {
    return this.restaurantService.createAsync(restaurantCreateDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a restaurant' })
  @ApiResponse({
    status: 200,
    description: 'Updated a restaurant',
    type: Restaurant,
  })
  update(
    @Param('id') id: string,
    @Body() restaurantUpdateDto: RestaurantUpdateDto,
  ) {
    return this.restaurantService.updateAsync(id, restaurantUpdateDto);
  }

  @Get('getByCategoryIds')
  @ApiOperation({ summary: 'Get restaurants by category ids' })
  @ApiResponse({
    status: 201,
    description: 'List of restaurant',
    type: Restaurant,
  })
  getByCategoryIds(@Query() restaurantFilterDto: RestaurantFilterDto) {
    return this.restaurantService.getByCategoryIdsAsync(restaurantFilterDto);
  }
}
