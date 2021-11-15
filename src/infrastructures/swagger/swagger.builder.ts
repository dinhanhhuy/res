import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerBuilder {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('VietCrypto')
      .setDescription('Swagger API Document')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
