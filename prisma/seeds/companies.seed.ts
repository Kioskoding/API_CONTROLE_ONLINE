import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedEmpresas() {
  try {
    const empresas = [
      {
        nome: 'Empresa A',
        situacao: 'Ativa',
        email: 'contato@empresaa.com',
        razao_social: 'Empresa A Ltda',
        inscricao_estadual: '123456789',
        controlar_estoque: true,
        bloquear_venda_sem_estoque: false,
        cnpj: '12345678000190',
        cep: '12345-678',
        logradouro: 'Rua das Flores',
        complemento: 'Sala 101',
        bairro: 'Centro',
        localidade: 'São Paulo',
        uf: 'SP',
      },
      {
        nome: 'Empresa B',
        situacao: 'Ativa',
        email: 'contato@empresab.com',
        razao_social: 'Empresa B S.A.',
        inscricao_estadual: '987654321',
        controlar_estoque: false,
        bloquear_venda_sem_estoque: true,
        cnpj: '98765432000110',
        cep: '54321-876',
        logradouro: 'Avenida Principal',
        bairro: 'Jardim',
        localidade: 'Rio de Janeiro',
        uf: 'RJ',
      },
    ];

    for (const empresa of empresas) {
      await prisma.empresa.create({
        data: empresa,
      });
    }

    console.log('Empresas criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar empresas:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedEmpresas();
