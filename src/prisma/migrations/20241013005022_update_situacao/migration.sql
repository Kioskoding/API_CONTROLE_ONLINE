/*
  Warnings:

  - Changed the type of `situacao` on the `Produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SituacaoProduto" AS ENUM ('ATIVO', 'INATIVO');

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "situacao",
ADD COLUMN     "situacao" "SituacaoProduto" NOT NULL;
