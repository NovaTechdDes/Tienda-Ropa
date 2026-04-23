-- AddForeignKey
ALTER TABLE "detalle_venta" ADD CONSTRAINT "detalle_venta_venta_id_fkey" FOREIGN KEY ("venta_id") REFERENCES "Venta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_venta" ADD CONSTRAINT "detalle_venta_variante_id_fkey" FOREIGN KEY ("variante_id") REFERENCES "variante_producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
