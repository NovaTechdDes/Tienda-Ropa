import { prisma } from "../db";

export const ventaService = {
  getAll: () => {
    return prisma.venta.findMany({});
  },
  getById: (id: number) => {
    return prisma.venta.findUnique({
      where: { id },
    });
  },
  create: async (data: any) => {
    const { detalles, ...rest } = data;

    return await prisma.$transaction(async (tx) => {
      const numeroActualizado = await tx.numero.update({
        where: { tipo: rest.tipo_venta },
        data: {
          numero: {
            increment: 1,
          },
        },
      });

      const venta = await tx.venta.create({
        data: {
          ...rest,
          numero_venta: numeroActualizado.numero.toString().padStart(8, "0"),
        },
      });

      for await (const elem of detalles) {
        await tx.detalle_venta.create({
          data: {
            venta_id: venta.id,
            variante_id: elem.variante_id,
            cantidad: elem.cantidad,
            precio: elem.precio,
          },
        });

        await tx.variante_producto.update({
          where: { id: elem.variante_id },
          data: {
            stock: {
              decrement: elem.cantidad,
            },
          },
        });
      }

      return venta;
    });
  },
  update: (id: number, data: any) => {
    return prisma.venta.update({
      where: { id },
      data,
    });
  },
};
