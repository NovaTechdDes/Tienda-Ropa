export interface Variante_Producto {
  id: string;
  producto_id: string;
  talle_id: string;
  color_id: string;
  precio: number;
  stock: number;
  sku?: string;
  activo: boolean;
}
