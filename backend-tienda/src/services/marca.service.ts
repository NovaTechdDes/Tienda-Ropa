import { prisma } from "../db";

export const marcaService = {
  getAll: () => {
    return prisma.marca.findMany();
  },
  getById: (id: number) => {
    return prisma.marca.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.marca.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.marca.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.marca.delete({
      where: { id },
    });
  },
};
