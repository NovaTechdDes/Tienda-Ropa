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
  update: async (id: number, variantes: any) => {
    //Traemos las variantes
    const actuales = await prisma.variante_producto.findMany({
      where: { producto_id: id },
    });

    const actualesIds = actuales.map((v) => v.id);
    const nuevasIds = variantes.filter((v: any) => v.id).map((v: any) => v.id);

    //Eliminamos las varianetes que no vienen
    const eliminarIds = actualesIds.filter((id) => !nuevasIds.includes(id));

    if (eliminarIds.length > 0) {
      await prisma.variante_producto.deleteMany({
        where: {
          id: { in: eliminarIds },
        },
      });
    }

    //Actualizamos las variantes que vienen
    for await (const variante of variantes) {
      if (variante.id) {
        await prisma.variante_producto.update({
          where: { id: variante.id },
          data: {
            talle_id: variante.talle_id,
            color_id: variante.color_id,
            precio: variante.precio,
            stock: variante.stock,
            sku: variante.sku,
            activo: variante.activo,
          },
        });
      } else {
        await prisma.variante_producto.create({
          data: {
            ...variante,
            producto_id: id,
          },
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
