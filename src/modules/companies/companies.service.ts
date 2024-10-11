import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}
  create(createCompanyDto: CreateCompanyDTO) {
    return this.prisma.empresa.create({ data: createCompanyDto });
  }

  findAll() {
    return this.prisma.empresa.findMany();
  }

  findOne(id: string) {
    return this.prisma.empresa.findUnique({ where: { id_empresa: id } });
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.empresa.update({
      where: { id_empresa: id },
      data: updateCompanyDto,
    });
  }

  remove(id: string) {
    return this.prisma.empresa.delete({ where: { id_empresa: id } });
  }
}
