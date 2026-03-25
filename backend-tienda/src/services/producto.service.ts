import { prisma } from "../db";

export const productoService = {
  getAll: () => {
    return prisma.producto.findMany({
      where: { activo: true },
      include: {
        variantes: {
          include: {
            talle: true,
            color: true,
          },
        },
      },
    });
  },
  getById: (id: number) => {
    return prisma.producto.findUnique({
      where: { id },
      include: {
        variantes: {
          include: {
            talle: true,
            color: true,
          },
        },
      },
    });
  },
  create: (data: any) => {
    console.log(data);
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
