import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateDeliveryDTO } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveriesService {
  constructor(private prisma: PrismaService) {}

  create(createDeliveryDto: CreateDeliveryDTO) {
    return this.prisma.pedido.create({ data: createDeliveryDto });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [pedidos, total] = await Promise.all([
      this.prisma.pedido.findMany({
        skip,
        orderBy: {
          data_emissao: 'desc',
        },
        take: limit,
        include: {
          cliente: true,
          empresa_representada: true,
          produtos: true,
        },
      }),
      this.prisma.pedido.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data: pedidos,
      meta: {
        total,
        page,
        limit,
        totalPages,
      },
    };
  }

  findOne(id: string) {
    return this.prisma.pedido.findUnique({ where: { id_pedido: id } });
  }

  update(id: string, updateDeliveryDto: UpdateDeliveryDto) {
    return this.prisma.pedido.update({
      where: { id_pedido: id },
      data: updateDeliveryDto,
    });
  }

  remove(id: string) {
    return this.prisma.pedido.delete({ where: { id_pedido: id } });
  }
}
