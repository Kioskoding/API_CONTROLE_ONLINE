import { ApiProperty } from '@nestjs/swagger';
import { SituacaoProduto } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { randomUUID } from 'crypto';

export class CreateDeliveryDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ example: randomUUID() })
  id_cliente: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ example: randomUUID() })
  id_empresa: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Tabela de Preço Exemplo' })
  tabela_preco: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 0 })
  desconto?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 0 })
  quantidade?: number;

  @IsEnum(SituacaoProduto)
  @IsOptional()
  @ApiProperty({
    enum: SituacaoProduto,
    example: SituacaoProduto.ATIVO,
    description: 'Situação do produto (ATIVO ou INATIVO)',
  })
  situacao?: SituacaoProduto;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 100 })
  preco_total?: number;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ example: '2024-12-31T23:59:59Z' })
  data_entrega?: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ example: '2024-01-01T12:00:00Z' })
  data_emissao: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '12345' })
  ordem_compra?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Observação Exemplo' })
  observacao?: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true })
  orcamento: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Crédito', nullable: true })
  tipo_pagamento?: string;
}
