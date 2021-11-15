import { ConfigModule } from '@nestjs/config';
import { config as configDotEnv } from 'dotenv';

configDotEnv();

const Configurations = {
  app: {
    host: process.env.APP_HOST || '127.0.0.1',
    port: parseInt(process.env.APP_PORT) || 3000,
  },
  database: {
    type: process.env.DATABASE_TYPE || 'mongodb',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    name: process.env.DATABASE_NAME || 'test',
  },
};

const ConfigurationModule = ConfigModule.forRoot({
  load: [() => Configurations],
});

export { Configurations, ConfigurationModule };
