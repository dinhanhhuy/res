import { ApiProperty } from '@nestjs/swagger';

export class RestaurantFilterDto {
  @ApiProperty()
  readonly CategoryIds: string[];
}
