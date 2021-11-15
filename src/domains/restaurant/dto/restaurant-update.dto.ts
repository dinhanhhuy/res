import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsString } from 'class-validator';
import { StatusType } from 'src/domains/base/enums';
import { Helpers } from 'src/shares/helpers';

export class RestaurantUpdateDto {
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsEnum(StatusType)
  @ApiProperty({
    enum: [Helpers.getAllValues(StatusType)],
    default: StatusType.Enabled,
  })
  readonly status: StatusType;

  @IsArray()
  @ApiProperty()
  categoryIds: string[];
}
