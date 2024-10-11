import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDTO } from './dto/create-client.dto';
import { UpdateClienteDTO } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(createClientDto: CreateClienteDTO) {
    return this.prisma.cliente.create({ data: createClientDto });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [clientes, total] = await Promise.all([
      this.prisma.cliente.findMany({
        skip,
        take: limit,
        orderBy: {
          razao_social: 'asc',
        },
      }),
      this.prisma.cliente.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data: clientes,
      meta: {
        total,
        page,
        limit,
        totalPages,
      },
    };
  }

  findOne(id: string) {
    return this.prisma.cliente.findUnique({ where: { id_cliente: id } });
  }

  update(id: string, updateClientDto: UpdateClienteDTO) {
    return this.prisma.cliente.update({
      where: { id_cliente: id },
      data: updateClientDto,
    });
  }

  remove(id: string) {
    return this.prisma.cliente.delete({ where: { id_cliente: id } });
  }
}
