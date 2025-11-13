import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_ACCESS_SECRET') || 'dev_access_secret_change_me',
    });
  }

  async validate(payload: any) {
    return {
      sub: payload.sub,
      role: payload.role,
      tenantId: payload.tenantId ?? null,
      email: payload.email,
      name: payload.name,
    };
  }
}
