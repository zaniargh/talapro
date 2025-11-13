import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';

export enum UserType {
  ADMIN = 'admin',
  CUSTOMER = 'customer'
}

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(UserType)
  userType?: UserType;
}
