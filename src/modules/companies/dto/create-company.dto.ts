import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateCompanyDTO {
  @IsUUID()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id_empresa: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Empresa Exemplo' })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Ativo' })
  situacao: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'email@empresa.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Razão Social Exemplo' })
  razao_social: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '123456789' })
  inscricao_estadual?: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  controlar_estoque: boolean;

  @IsBoolean()
  @ApiProperty({ example: false })
  bloquear_venda_sem_estoque: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12345678901234' })
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12345-678' })
  cep: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Rua Exemplo' })
  logradouro: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Apto 101' })
  complemento?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Bairro Exemplo' })
  bairro: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Cidade Exemplo' })
  localidade: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'SP' })
  uf: string;
}
