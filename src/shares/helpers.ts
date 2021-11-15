import { ObjectID } from 'typeorm/driver/mongodb/typings';
import { ObjectId } from 'mongodb';

export class Helpers {
  static GetObjectId(id: string): ObjectID {
    if (ObjectId.isValid(id)) {
      return new ObjectId(id) as any;
    }
    return null;
  }

  static getAllValues<T>(enumeration: T): Array<T[keyof T]> {
    return Object.keys(enumeration).map((k) => enumeration[k]);
  }
}
