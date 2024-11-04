import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedClientes() {
  try {
    const clientes = [
      {
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        telefone: '(11) 98765-4321',
        cpf: '123.456.789-00',
        cep: '01234-567',
        logradouro: 'Rua das Oliveiras',
        numero: '123',
        complemento: 'Apto 45',
        bairro: 'Jardim Primavera',
        localidade: 'São Paulo',
        uf: 'SP',
      },
      {
        nome: 'Maria Santos',
        email: 'maria.santos@email.com',
        telefone: '(21) 98765-4321',
        cpf: '987.654.321-00',
        cep: '54321-876',
        logradouro: 'Avenida das Palmeiras',
        numero: '456',
        bairro: 'Centro',
        localidade: 'Rio de Janeiro',
        uf: 'RJ',
      },
    ];

    for (const cliente of clientes) {
      await prisma.cliente.create({
        data: cliente as unknown as Prisma.ClienteCreateInput,
      });
    }

    console.log('Clientes criados com sucesso!');
  } catch (error) {
    console.error('Erro ao criar clientes:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedClientes();
