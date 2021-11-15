import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base.entity';

@Entity('restaurants')
export class Restaurant extends BaseEntity {
  @Column()
  name: string;

  @Column()
  categoryIds: string[];
}
