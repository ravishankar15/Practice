import { Module } from '@nestjs/common';
import { PhotoModule } from './photo/photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule]
})
export class AppModule {}
