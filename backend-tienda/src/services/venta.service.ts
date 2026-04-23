import { prisma } from "../db";

export const ventaService = {
  getAll: (
    desde?: string,
    hasta?: string,
    tipo?: string,
    buscador?: string,
  ) => {
    const where: any = {};

    if (desde && hasta) {
      where.fecha = {
        gte: new Date(`${desde}T00:00:00`),
        lte: new Date(`${hasta}T23:59:59.999`),
      };
    }

    if (tipo && tipo !== "TODOS") {
      where.tipo_venta = tipo;
    }

    if (buscador) {
      where.OR = [
        { numero_venta: { contains: buscador, mode: "insensitive" } },
        { nombre_cliente: { contains: buscador, mode: "insensitive" } },
      ];
    }

    return prisma.venta.findMany({
      where,
      include: {
        detalles: {
          select: {
            id: true,
            cantidad: true,
            variante_id: true,
            precio: true,
            variante: {
              select: {
                id: true,
                producto: {
                  select: {
                    descripcion: true,
                    img_url: true,
                  },
                },
                talle: true,
                color: true,
                sku: true,
              },
            },
          },
        },
      },
      orderBy: { fecha: "desc" },
    });
  },
  getById: (id: number) => {
    return prisma.venta.findUnique({
      where: { id },
    });
  },
  create: async (data: any) => {
    const { detalles, ...rest } = data;

    return await prisma.$transaction(async (tx) => {
      const numeroActualizado = await tx.numero.update({
        where: { tipo: rest.tipo_venta },
        data: {
          numero: {
            increment: 1,
          },
        },
      });

      const venta = await tx.venta.create({
        data: {
          ...rest,
          numero_venta: numeroActualizado.numero.toString().padStart(8, "0"),
        },
      });

      for await (const elem of detalles) {
        await tx.detalle_venta.create({
          data: {
            venta_id: venta.id,
            variante_id: elem.variante_id,
            cantidad: elem.cantidad,
            precio: elem.precio,
          },
        });

        await tx.variante_producto.update({
          where: { id: elem.variante_id },
          data: {
            stock: {
              decrement: elem.cantidad,
            },
          },
        });
      }

      return venta;
    });
  },
  update: (id: number, data: any) => {
    return prisma.venta.update({
      where: { id },
      data,
    });
  },
};
