import { 
  Body, 
  Post,
  Get,
  Param,
  Controller,
  ParseIntPipe,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

//Optional Package
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { createCatSchema } from './schema/cat.schema';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService){}

  @Post()
  @Roles('admin')
  @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body() createCatDto: CreateCatDto){
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id) {
    //logic
  }
}
