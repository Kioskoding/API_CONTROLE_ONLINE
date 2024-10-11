import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedProdutos() {
  try {
    const produtos = [
      {
        nome: 'Produto A',
        descricao: 'Descrição do Produto A',
        preco: 100.5,
        categoria_produto: 'Eletrônicos',
        peso_liquido: 0.5,
        peso_bruto: 0.7,
        situacao: 'Disponível',
        unidade: 'Unidade',
        codigo: 'PROD-A',
        estoque: 50,
      },
      {
        nome: 'Produto B',
        descricao: 'Descrição do Produto B',
        preco: 75.0,
        categoria_produto: 'Vestuário',
        peso_liquido: 0.3,
        peso_bruto: 0.4,
        situacao: 'Disponível',
        unidade: 'Peça',
        codigo: 'PROD-B',
        estoque: 100,
      },
      {
        nome: 'Produto C',
        descricao: 'Descrição do Produto C',
        preco: 200.0,
        categoria_produto: 'Móveis',
        peso_liquido: 5.0,
        peso_bruto: 5.5,
        situacao: 'Disponível',
        unidade: 'Unidade',
        codigo: 'PROD-C',
        estoque: 25,
      },
    ];

    for (const produto of produtos) {
      await prisma.produto.create({
        data: produto,
      });
    }

    console.log('Produtos criados com sucesso!');
  } catch (error) {
    console.error('Erro ao criar produtos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProdutos();
