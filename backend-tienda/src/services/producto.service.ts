import { prisma } from "../db";

export const productoService = {
  getAll: (buscador: string) => {
    return prisma.producto.findMany({
      where: {
        activo: true,
        OR: [
          { descripcion: { contains: buscador, mode: "insensitive" } },
          {
            variantes: {
              some: {
                sku: { contains: buscador, mode: "insensitive" },
              },
            },
          },
        ],
      },
      orderBy: { descripcion: "asc" },
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
