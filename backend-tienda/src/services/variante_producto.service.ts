import { prisma } from "../db";

export const variante_productoService = {
  getAll: () => {
    return prisma.variante_producto.findMany({
      where: { activo: true },
    });
  },
  getById: (id: number) => {
    return prisma.variante_producto.findUnique({
      where: { id },
    });
  },
  create: async (id: any, variantes: any) => {
    for await (const variante of variantes) {
      console.log(variante);
      await prisma.variante_producto.create({
        data: {
          ...variante,
          producto_id: id,
        },
      });
    }
  },
  update: (id: number, data: any) => {
    return prisma.variante_producto.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.variante_producto.update({
      where: { id },
      data: { activo: false },
    });
  },
};
