import { prisma } from "../db";

export const detalle_ventaService = {
  getAll: () => {
    return prisma.detalle_venta.findMany({});
  },
  getById: (id: number) => {
    return prisma.detalle_venta.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.detalle_venta.create({
      data,
    });
  },
};
