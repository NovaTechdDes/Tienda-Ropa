/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Venta` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_pago` on the `Venta` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tipo_venta,numero_venta]` on the table `Venta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `metodo_pago` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Venta_numero_venta_key";

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "localidad" TEXT;

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "precio_global" DOUBLE PRECISION,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "createdAt",
DROP COLUMN "tipo_pago",
ADD COLUMN     "descuento" DOUBLE PRECISION,
ADD COLUMN     "direccion_cliente" TEXT,
ADD COLUMN     "dni_cliente" TEXT,
ADD COLUMN     "metodo_pago" TEXT NOT NULL,
ADD COLUMN     "nombre_cliente" TEXT,
ADD COLUMN     "subtotal" DOUBLE PRECISION,
ADD COLUMN     "telefono_cliente" TEXT,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "variante_producto" ALTER COLUMN "precio" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Numero" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Numero_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Numero_tipo_key" ON "Numero"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Venta_tipo_venta_numero_venta_key" ON "Venta"("tipo_venta", "numero_venta");

-- AddForeignKey
ALTER TABLE "variante_producto" ADD CONSTRAINT "variante_producto_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variante_producto" ADD CONSTRAINT "variante_producto_talle_id_fkey" FOREIGN KEY ("talle_id") REFERENCES "Talle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variante_producto" ADD CONSTRAINT "variante_producto_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
