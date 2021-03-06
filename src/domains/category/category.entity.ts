import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @Column()
  name: string;
}
