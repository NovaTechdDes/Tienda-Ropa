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
    const { precio, precio_global, id_producto, variante_id, cantidad, tipo, ...rest } = data;

    const idProductoNum = Number(id_producto);
    const varianteIdNum = Number(variante_id);
    const cantidadNum = Number(cantidad);
    const precioNum = Number(precio);
    const precioGlobalNum = Number(precio_global);

    // 1. Modificar la variante (precio y stock)
    const updateVarianteData: any = {
      precio: precioNum,
    };

    if (tipo === "ingreso") {
      updateVarianteData.stock = { increment: cantidadNum };
    } else if (tipo === "egreso") {
      updateVarianteData.stock = { decrement: cantidadNum };
    }

    await prisma.variante_producto.update({
      where: { id: varianteIdNum },
      data: updateVarianteData,
    });

    // 2. Modificar el producto (precio_global)
    if (!isNaN(idProductoNum) && !isNaN(precioGlobalNum)) {
      await prisma.producto.update({
        where: { id: idProductoNum },
        data: { precio_global: precioGlobalNum },
      });
    }

    // 3. Agregar stock_movimiento
    return prisma.stock_movimiento.create({
      data: {
        ...rest,
        variante_id: varianteIdNum,
        cantidad: cantidadNum,
        tipo: tipo, // Enum: ingreso | egreso
      },
    });
  },
  update: (id: number, data: any) => {
    const { variante_id, cantidad, ...rest } = data;
    
    const updateData: any = { ...rest };
    if (variante_id !== undefined) updateData.variante_id = Number(variante_id);
    if (cantidad !== undefined) updateData.cantidad = Number(cantidad);

    return prisma.stock_movimiento.update({
      where: { id },
      data: updateData,
    });
  },
  delete: (id: number) => {
    return prisma.stock_movimiento.delete({
      where: { id },
    });
  },
};
