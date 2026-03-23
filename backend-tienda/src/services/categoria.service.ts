import { prisma } from "../db";

export const CategoriaService = {
  getAll: () => {
    return prisma.categoria.findMany();
  },
  create: (data: any) => {
    return prisma.categoria.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.categoria.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.categoria.delete({
      where: { id },
    });
  },
};
