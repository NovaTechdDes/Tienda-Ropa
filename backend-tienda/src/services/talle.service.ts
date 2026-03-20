import { prisma } from "../db";

export const talleService = {
  getAll: () => {
    return prisma.talle.findMany();
  },
  getById: (id: number) => {
    return prisma.talle.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.talle.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.talle.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.talle.delete({
      where: { id },
    });
  },
};
