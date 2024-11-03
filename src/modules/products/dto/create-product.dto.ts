import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum SituacaoProduto {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
}

export class CreateProdutDTO {
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

  @IsEnum(SituacaoProduto)
  @ApiProperty({ enum: SituacaoProduto, example: SituacaoProduto.ATIVO })
  situacao: SituacaoProduto;

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
