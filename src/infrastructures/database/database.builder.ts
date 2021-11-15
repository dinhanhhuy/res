import { TypeOrmModule } from '@nestjs/typeorm';
import { Configurations } from 'src/app.config';
import { Entities } from 'src/domains';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: Configurations.database.type as any,
  host: Configurations.database.host,
  database: Configurations.database.name,
  useUnifiedTopology: true,
  entities: Entities,
  namingStrategy: new SnakeNamingStrategy(),
});
