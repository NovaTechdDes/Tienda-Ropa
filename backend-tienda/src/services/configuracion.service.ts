import { CategoriaService } from "./categoria.service";
import { colorService } from "./color.service";
import { marcaService } from "./marca.service";
import { provedorService } from "./provedor.service";
import { talleService } from "./talle.service";

export const configuracionService = {
  getAll: async () => {
    const [talles, colores, marcas, provedores, categorias] = await Promise.all(
      [
        talleService.getAll(),
        colorService.getAll(),
        marcaService.getAll(),
        provedorService.getAll(),
        CategoriaService.getAll(),
      ],
    );

    return { talles, colores, marcas, provedores, categorias };
  },
};
