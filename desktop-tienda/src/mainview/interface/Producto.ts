import { Variante_Producto } from "./Variante_Producto";

export interface Producto {
  id: string;
  descripcion: string;
  provedor_id?: string;
  marca_id?: string;
  categoria_id?: string;
  img_url?: string;
  observacion?: string;
  sku?: string;

  variantes?: Variante_Producto[];
}
