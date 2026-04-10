import { Variante_Producto } from './Variante_Producto';

export interface Producto {
  id: string;
  descripcion: string;
  provedor_id?: number;
  marca_id?: number;
  precio_global?: number;
  categoria_id?: number;
  img_url?: string;
  observacion?: string;

  variantes?: Variante_Producto[];
}
