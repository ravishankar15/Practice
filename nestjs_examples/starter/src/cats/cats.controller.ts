import { Controller, 
  Get, 
  Query, 
  Post, 
  Body, 
  Put, 
  Param, 
  Delete, 
  HttpException, 
  HttpStatus, 
  ForbiddenException, 
  RequestTimeoutException, 
  UseFilters, 
  UsePipes, 
  ValidationPipe,
  UseGuards,
  UseInterceptors } from '@nestjs/common';
import { CatDTO } from './dto/cat.dto';
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from '../common/exception-filters/http-exception.filter'
import { AuthGuard } from '../common/guards/auth.guard'
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor'
import { TransformInterceptor } from '../common/interceptors/transform.interceptor'
import { ExcludeNullInterceptor } from '../common/interceptors/exclude-null.interceptor'

@Controller('cats')
@UseInterceptors(LoggingInterceptor, TransformInterceptor, ExcludeNullInterceptor)
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UsePipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  @UseFilters(HttpExceptionFilter)
  async create(@Body() catDto: CatDTO) {
    this.catsService.create(catDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@Query() params: any): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('exception')
  @UseFilters(HttpExceptionFilter)
  throwBasicException() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('customized_exception')
  throwCustomizedException() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message'
    }, HttpStatus.FORBIDDEN);
  }

  @Get('hierarchy_exception/:type')
  throwHierarchyException(@Param('type') type: string) {
    if(type == 'forbidden'){
      throw new ForbiddenException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message'
      });
    } else if (type == 'request_timeout') {
      throw new RequestTimeoutException();
    }
      
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action findOne returns a #${id} cat`;
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
