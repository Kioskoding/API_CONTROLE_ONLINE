/*
  Warnings:

  - Added the required column `tabela_preco` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "tabela_preco" TEXT NOT NULL;
