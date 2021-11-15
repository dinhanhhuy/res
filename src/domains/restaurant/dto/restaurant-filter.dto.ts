import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class RestaurantFilterDto {
  @IsArray()
  @ApiProperty()
  readonly CategoryIds: string[];
}
