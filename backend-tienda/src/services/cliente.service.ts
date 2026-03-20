import { prisma } from "../db";

export const clienteService = {
  getAll: () => {
    return prisma.cliente.findMany({
      where: { activo: true },
    });
  },
  getById: (id: string) => {
    return prisma.cliente.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.cliente.create({
      data,
    });
  },
  update: (id: string, data: any) => {
    return prisma.cliente.update({
      where: { id },
      data,
    });
  },
  delete: (id: string) => {
    return prisma.cliente.update({
      where: { id },
      data: { activo: false },
    });
  },
};
