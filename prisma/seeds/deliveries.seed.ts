import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDeliveries() {
  try {
    const cliente = await prisma.cliente.findFirst();
    const empresa = await prisma.empresa.findFirst();
    const produto = await prisma.produto.findFirst();

    if (!cliente || !empresa || !produto) {
      console.log(
        'Erro: Cliente, Empresa ou Produto não encontrados. Certifique-se de que eles existam antes de criar os pedidos.',
      );
      return;
    }

    const pedidos = [
      {
        desconto: 0,
        quantidade: 2,
        situacao: 'pendente',
        preco_total: 200.0,
        data_entrega: new Date('2024-03-15'),
        data_emissao: new Date(),
        ordem_compra: 'OC001',
        observacao: 'Entrega urgente',
        orcamento: false,
        tipo_pagamento: 'Cartão de Crédito',
        id_cliente: cliente.id_cliente,
        id_empresa: empresa.id_empresa,
        produtos: {
          connect: { id_produto: produto.id_produto },
        },
      },
      {
        desconto: 10,
        quantidade: 1,
        situacao: 'em processamento',
        preco_total: 90.0,
        data_entrega: new Date('2024-03-20'),
        data_emissao: new Date(),
        ordem_compra: 'OC002',
        observacao: 'Cliente preferencial',
        orcamento: true,
        tipo_pagamento: 'Boleto',
        id_cliente: cliente.id_cliente,
        id_empresa: empresa.id_empresa,
        produtos: {
          connect: { id_produto: produto.id_produto },
        },
      },
    ];

    for (const pedido of pedidos) {
      await prisma.pedido.create({
        data: pedido as unknown as Prisma.PedidoCreateInput,
      });
    }

    console.log('Pedidos de entrega criados com sucesso!');
  } catch (error) {
    console.error('Erro ao criar pedidos de entrega:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDeliveries();
