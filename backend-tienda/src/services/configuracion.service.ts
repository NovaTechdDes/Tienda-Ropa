import { colorService } from "./color.service"
import { marcaService } from "./marca.service"
import { provedorService } from "./provedor.service"
import { talleService } from "./talle.service"

export const configuracionService = {
getAll: async () => {
    const [ talles, colores, marcas, provedores] = await Promise.all([
        talleService.getAll(),
        colorService.getAll(),
        marcaService.getAll(),
        provedorService.getAll(),
    ])

    return { talles, colores, marcas, provedores }
}
}