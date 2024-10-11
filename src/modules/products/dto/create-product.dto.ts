import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { randomUUID } from 'crypto';

export class CreateProdutDTO {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ example: randomUUID() })
  id_produto: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Produto Exemplo' })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Descrição do Produto' })
  descricao: string;

  @IsNumber()
  @ApiProperty({ example: 100.0 })
  preco: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Categoria Exemplo' })
  categoria_produto: string;

  @IsNumber()
  @ApiProperty({ example: 1.0 })
  peso_liquido: number;

  @IsNumber()
  @ApiProperty({ example: 1.5 })
  peso_bruto: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Ativo' })
  situacao: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Unidade Exemplo' })
  unidade: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '123456' })
  codigo: string;

  @IsInt()
  @ApiProperty({ example: 10 })
  estoque: number;
}
