import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CatDTO } from './dto/cat.dto';
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() catDto: CatDTO) {
    this.catsService.create(catDto);
  }

  @Get()
  async findAll(@Query() params: any): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() catDto: CatDTO): string {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return `This action removes cat with id ${id}`
  }

}
