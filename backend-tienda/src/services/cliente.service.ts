import { prisma } from "../db";

export const clienteService = {
  getAll: async () => {
    const clientes = await prisma.cliente.findMany({
      include: {
        _count: {
          select: { ventas: true },
        },
        ventas: {
          select: { total: true },
        },
      },
      where: { activo: true },
    });

    return clientes.map((cliente: any) => {
      return {
        ...cliente,
        compras: cliente._count.ventas,
        gastado: cliente.ventas.reduce(
          (acc: number, venta: any) => acc + venta.total,
          0,
        ),
      };
    });
  },
  getById: (id: number) => {
    return prisma.cliente.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.cliente.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.cliente.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.cliente.update({
      where: { id },
      data: { activo: false },
    });
  },
};
