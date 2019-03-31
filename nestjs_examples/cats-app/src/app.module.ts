import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule]
})
export class AppModule {}
