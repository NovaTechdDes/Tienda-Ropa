import { prisma } from "../db";

export const colorService = {
  getAll: () => {
    return prisma.color.findMany();
  },
  getById: (id: number) => {
    return prisma.color.findUnique({
      where: { id },
    });
  },
  create: (data: any) => {
    return prisma.color.create({
      data,
    });
  },
  update: (id: number, data: any) => {
    return prisma.color.update({
      where: { id },
      data,
    });
  },
  delete: (id: number) => {
    return prisma.color.delete({
      where: { id },
    });
  },
};
