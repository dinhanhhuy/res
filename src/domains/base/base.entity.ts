import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { StatusType } from './enums';

@Entity()
export class BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  status = StatusType.Enabled;

  @Column()
  updatedAt = new Date();

  @Column()
  createdAt = new Date();
}
