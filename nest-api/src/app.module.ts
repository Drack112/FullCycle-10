import { DatabaseModule } from '@app/database';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_DSN: Joi.string().required(),
        SERVER_PORT: Joi.number().required(),
      }),
    }),
    DatabaseModule,
    RoutesModule,
  ],
})
export class AppModule {}
