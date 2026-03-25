import { prisma } from "../db";

export const variante_productoService = {
  getAll: () => {
    return prisma.variante_producto.findMany({
      where: { activo: true },
      include: {
        talle: true,
        color: true,
      },
    });
  },
  getById: (id: number) => {
    return prisma.variante_producto.findUnique({
      where: { id },
      include: {
        talle: true,
        color: true,
      },
    });
  },
  create: async (id: any, variantes: any) => {
    for await (const variante of variantes) {
      await prisma.variante_producto.create({
        data: {
          ...variante,
          producto_id: id,
        },
      });
    }
  },
  update: async (id: number, data: any) => {
    for await (const variante of data) {
      const existe = variante.id
        ? await prisma.variante_producto.findUnique({
            where: { id: variante.id },
          })
        : null;

      if (existe) {
        await prisma.variante_producto.update({
          where: { id: variante.id },
          data: { ...variante },
        });
      } else {
        await prisma.variante_producto.create({
          data: { ...variante, producto_id: id },
        });
      }
    }
  },
  delete: (id: number) => {
    return prisma.variante_producto.update({
      where: { id },
      data: { activo: false },
    });
  },
};
