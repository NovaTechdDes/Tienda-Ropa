import { prisma } from "../db";

export const productoService = {
  getAll: () => {
    return prisma.producto.findMany({
      where: { activo: true },
    });
  },
  getById: (id: number) => {
    return prisma.producto.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.producto.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.producto.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.producto.update({
      where: { id },
      data: { activo: false },
    });
  },
};
