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
  create: async (data: any) => {
    const { precio, precio_global, id_producto, ...rest } = data;

    //Modificar la variante
    const variante = await prisma.variante_producto.findUnique({
      where: { id: data.variante_id },
    });

    if (!variante) {
      return { message: "Variante no encontrada" };
    }

    let newStock = 0;

    if (data.tipo === "ingreso") {
      newStock = data.cantidad;
    } else {
      newStock = data.cantidad;
    }

    await prisma.variante_producto.update({
      where: { id: data.variante_id },
      data: { stock: newStock, precio },
    });

    //Modificar el producto
    await prisma.producto.update({
      where: { id: data.id_producto },
      data: { precio_global },
    });

    //Agregar stock_Movimiento

    return prisma.stock_movimiento.create({
      data: rest,
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
