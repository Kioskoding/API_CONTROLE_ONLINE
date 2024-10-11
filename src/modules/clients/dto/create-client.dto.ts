import { ApiProperty } from '@nestjs/swagger';
import { TipoDocumento } from '@prisma/client';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateClienteDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'CPF' })
  tipo_documento?: TipoDocumento; // Campo opcional com valores 'CPF' ou 'CNPJ'

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12345678900' })
  documento: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Razão Social Exemplo' })
  razao_social: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Nome Fantasia Exemplo' })
  nome_fantasia?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'exemplo@empresa.com', nullable: true })
  email?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ example: true })
  enviar_pedidos?: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Endereço Exemplo' })
  endereco: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 123 })
  numero: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Bairro Exemplo' })
  bairro: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Complemento Exemplo', nullable: true })
  complemento?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Estado Exemplo' })
  estado: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Município Exemplo' })
  municipio: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '123456789', nullable: true })
  inscricao_estadual?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12345-678' })
  cep: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Transportadora Exemplo', nullable: true })
  transportadora?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ example: false })
  inativo?: boolean;
}
