export interface Variante_Producto {
  id: string;
  producto_id: string;
  talle_id: number;
  color_id: number;
  precio: number;
  stock: number;
  sku?: string;
  activo: boolean;
}
