import { 
  CallHandler, 
  ExecutionContext, 
  Injectable, 
  NestInterceptor,
  HttpException,
  HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
            catchErro(err => throwError(new HttpException('New Message', HttpStatus.BAD_GATEWAY)))
          )
  }
}
