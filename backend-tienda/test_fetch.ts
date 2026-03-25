import { prisma } from "./src/db";

async function testFetch() {
  try {
    const producto = await prisma.producto.findFirst({
      where: { activo: true },
      include: {
        variantes: {
          include: {
            talle: true,
            color: true,
          },
        },
      },
    });

    if (producto) {
      console.log("Producto encontrado:");
      console.log(JSON.stringify(producto, null, 2));
    } else {
      console.log("No se encontraron productos activos.");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testFetch();
