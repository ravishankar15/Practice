import { Module, RequestMethod, MiddlewareConsumer, NestModule  } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

import { LoggerMiddleware } from '../common/middlewares/logger.middleware'

@Module({
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'cats',
      method: RequestMethod.ALL
    });
  }
}
