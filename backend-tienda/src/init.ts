import { prisma } from "./db";

export async function initData() {
  const cliente = await prisma.cliente.findUnique({
    where: { id: 1 },
  });

  if (!cliente) {
    await prisma.cliente.create({
      data: {
        id: 1,
        nombre: "CONSUMIDOR FINAL",
        direccion: "CHAJARI",
        telefono: "00000000",
        localidad: "CHAJARI",
        dni: "00000000",
      },
    });

    console.log("✔ Cliente CONSUMIDOR FINAL creado");
  } else {
    console.log("✔ Cliente CONSUMIDOR FINAL ya existe");
  }
}

export async function initNumeros() {
  const numero = await prisma.numero.findFirst({
    where: { tipo: "EFECTIVO" },
  });

  if (!numero) {
    await prisma.numero.create({
      data: {
        tipo: "EFECTIVO",
        numero: 1,
      },
    });

    console.log("✔ Numero EFECTIVO creado");
  } else {
    console.log("✔ Numero EFECTIVO ya existe");
  }
}
