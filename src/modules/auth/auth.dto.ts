import { ApiProperty } from '@nestjs/swagger';
import { Cargo, Usuario } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { INVALID_EMAIL } from '../../shared/constants/strings';

export class AuthResponseDTO {
  user: Usuario;
  accessToken: string;
}

export class RegisterUserDTO {
  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  nome: string;

  @IsString()
  @ApiProperty()
  senha: string;

  @IsEnum(Cargo)
  @ApiProperty()
  cargo: Cargo;

  @IsString()
  @ApiProperty()
  cpf: string;

  @IsString()
  @ApiProperty()
  plano: string;
}

export class LoginUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @IsEmail({}, { message: INVALID_EMAIL })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  senha: string;
}
