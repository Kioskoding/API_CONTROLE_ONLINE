import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from '@prisma/client';

import { GLOBAL_CONFIG } from '../../configs/global.config';
import { AuthHelpers } from '../../shared/helpers/auth.helpers';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';

import { AuthResponseDTO, LoginUserDTO, RegisterUserDTO } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  public async login(loginUserDTO: LoginUserDTO): Promise<AuthResponseDTO> {
    const userData = await this.userService.findUser({
      email: loginUserDTO.email,
    });

    if (!userData) {
      throw new UnauthorizedException();
    }

    const isMatch = await AuthHelpers.verify(
      loginUserDTO.senha, // senha fornecida pelo usuário
      userData.senha, // hash salvo no banco de dados
    );

    console.log(isMatch, 'isMatch');
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = {
      ...userData,
      senha: null, // Remover a senha do payload
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: GLOBAL_CONFIG.security.expiresIn,
    });

    return {
      user: payload,
      accessToken: accessToken,
    };
  }

  public async register(user: RegisterUserDTO): Promise<Usuario> {
    const newUser = await this.userService.createUser(user);
    delete newUser.senha;
    return newUser;
  }
}
