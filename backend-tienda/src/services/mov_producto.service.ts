import { prisma } from "../db";

export const mov_productoService = {
  getAll: () => {
    return prisma.stock_movimiento.findMany({});
  },
  getById: (id: number) => {
    return prisma.stock_movimiento.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.stock_movimiento.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.stock_movimiento.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.stock_movimiento.delete({
      where: { id },
    });
  },
};
