import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class RestaurantCreateDto {
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsArray()
  @ApiProperty()
  categoryIds: string[];
}
