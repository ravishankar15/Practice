import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService){}

  async createToken() {
    const user: JwtPayload = { email: 'test@gmail.com' };
    const accessToken = this.jwtService.sign(user);
    return {
      expiersIn: 3600,
      accessToken,
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return payload.email == 'test@gmail.com';
  }
}
