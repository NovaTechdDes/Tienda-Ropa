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
    return await prisma.$transaction(async (tx) => {
      const numeroActualizado = await tx.numero.update({
        where: { tipo: data.metodo_pago },
        data: {
          numero: {
            increment: 1,
          },
        },
      });

      const venta = await tx.venta.create({
        data: {
          ...data,
          numero_venta: numeroActualizado.numero.toString().padStart(8, "0"),
        },
      });

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
