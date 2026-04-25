/*
  Warnings:

  - Changed the type of `tipo` on the `stock_movimiento` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipoMovimiento" AS ENUM ('ingreso', 'egreso');

-- AlterTable
ALTER TABLE "stock_movimiento" ALTER COLUMN "tipo" TYPE "TipoMovimiento" USING ("tipo"::"TipoMovimiento");

-- AddForeignKey
ALTER TABLE "stock_movimiento" ADD CONSTRAINT "stock_movimiento_variante_id_fkey" FOREIGN KEY ("variante_id") REFERENCES "variante_producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
