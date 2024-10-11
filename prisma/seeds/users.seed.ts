import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedUsuarios() {
  try {
    const usuarios = [
      {
        nome: 'Carlos Oliveira',
        email: 'carlos.oliveira@email.com',
        senha: 'senha123',
        tipo: 'admin',
        situacao: 'ativo',
      },
      {
        nome: 'Ana Rodrigues',
        email: 'ana.rodrigues@email.com',
        senha: 'senha456',
        tipo: 'usuario',
        situacao: 'ativo',
      },
      {
        nome: 'Pedro Santos',
        email: 'pedro.santos@email.com',
        senha: 'senha789',
        tipo: 'usuario',
        situacao: 'inativo',
      },
    ];

    for (const usuario of usuarios) {
      await prisma.usuario.create({
        data: usuario as unknown as Prisma.UsuarioCreateInput,
      });
    }

    console.log('Usuários criados com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuários:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUsuarios();
