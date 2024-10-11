import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateProdutDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  create(createProductDto: CreateProdutDTO) {
    return this.prisma.produto.create({ data: createProductDto });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [produtos, total] = await Promise.all([
      this.prisma.produto.findMany({
        skip,
        take: limit,
        orderBy: {
          nome: 'asc', // Você pode ajustar a ordenação conforme necessário
        },
      }),
      this.prisma.produto.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data: produtos,
      meta: {
        total,
        page,
        limit,
        totalPages,
      },
    };
  }

  findOne(id: string) {
    return this.prisma.produto.findUnique({ where: { id_produto: id } });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.produto.update({
      where: { id_produto: id },
      data: updateProductDto,
    });
  }

  remove(id: string) {
    return this.prisma.produto.delete({ where: { id_produto: id } });
  }
}
