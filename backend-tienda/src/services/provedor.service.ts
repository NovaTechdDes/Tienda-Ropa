import { prisma } from "../db";

export const provedorService = {
  getAll: () => {
    return prisma.provedor.findMany();
  },
  getById: (id: number) => {
    return prisma.provedor.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.provedor.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.provedor.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.provedor.delete({
      where: { id },
    });
  },
};
