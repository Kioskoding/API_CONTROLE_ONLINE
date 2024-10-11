import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Usuario } from '@prisma/client';

import { RegisterUserDTO } from '../auth/auth.dto';
import { JwtAuthGuard } from '../auth/auth.jwt.guard';

import { UserService } from './user.service';

@ApiTags('users')
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<Usuario[]> {
    return this.userService.users({});
  }

  @Post('user')
  async signupUser(@Body() userData: RegisterUserDTO): Promise<Usuario> {
    return this.userService.createUser(userData);
  }
}
