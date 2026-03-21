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
  create: (data: any) => {
    return prisma.venta.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.venta.update({
      where: { id },
      data,
    });
  },
};
