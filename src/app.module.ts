import { Module } from '@nestjs/common';
import { CategoryModule } from './domains/category/category.module';
import { ConfigurationModule } from './app.config';
import { DatabaseModule } from './infrastructures/database/database.builder';
import { AppController } from './app.controller';
import { RestaurantModule } from './domains/restaurant/restaurant.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigurationModule,
    CategoryModule,
    RestaurantModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
