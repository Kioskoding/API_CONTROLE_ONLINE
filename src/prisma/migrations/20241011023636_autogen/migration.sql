-- CreateEnum
CREATE TYPE "Cargo" AS ENUM ('ADM', 'USER');

-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('CPF', 'CNPJ');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "plano" TEXT NOT NULL,
    "cargo" "Cargo" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "tipo_documento" "TipoDocumento",
    "documento" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "nome_fantasia" TEXT,
    "email" TEXT,
    "enviar_pedidos" BOOLEAN,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "estado" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "inscricao_estadual" TEXT,
    "cep" TEXT NOT NULL,
    "transportadora" TEXT,
    "inativo" BOOLEAN,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "categoria_produto" TEXT NOT NULL,
    "peso_liquido" DECIMAL(65,30) NOT NULL,
    "peso_bruto" DECIMAL(65,30) NOT NULL,
    "situacao" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "id_pedido" TEXT,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id_produto")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id_pedido" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "desconto" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "quantidade" INTEGER NOT NULL DEFAULT 0,
    "situacao" TEXT NOT NULL DEFAULT 'pending',
    "preco_total" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "data_entrega" TIMESTAMP(3),
    "data_emissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ordem_compra" TEXT,
    "observacao" TEXT,
    "documento" TEXT NOT NULL,
    "orcamento" BOOLEAN NOT NULL,
    "tipo_pagamento" TEXT,
    "id_cliente" TEXT NOT NULL,
    "id_empresa" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id_empresa" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "nome" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "inscricao_estadual" TEXT,
    "controlar_estoque" BOOLEAN NOT NULL,
    "bloquear_venda_sem_estoque" BOOLEAN NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT NOT NULL,
    "localidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id_empresa")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_documento_key" ON "Cliente"("documento");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id_pedido") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "Empresa"("id_empresa") ON DELETE RESTRICT ON UPDATE CASCADE;
