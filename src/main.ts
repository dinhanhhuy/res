import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { SwaggerBuilder } from './infrastructures/swagger/swagger.builder';
import * as morgan from 'morgan';
import { Configurations } from './app.config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: ['error', 'warn', 'log', 'debug'],
    },
  );

  app.use(morgan('tiny'));
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({
    type: VersioningType.URI,
  });

  SwaggerBuilder.setup(app);

  await app.listen(Configurations.app.port, Configurations.app.host);
  Logger.log(
    `Application is running on: ${await app.getUrl()}`,
    bootstrap.name,
  );
}
bootstrap();
