import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard implements AuthGuard('jwt') {
  canActivate (context: ExecutionContext): boolean {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user){
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
