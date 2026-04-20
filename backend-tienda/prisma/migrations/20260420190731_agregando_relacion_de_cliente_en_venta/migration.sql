-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
