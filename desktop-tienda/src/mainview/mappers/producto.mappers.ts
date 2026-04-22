import { Producto } from '../interface/Producto';

export interface ProductoBackend {
  descripcion: string;
  categoria_id: number;
  observacion: string;
  precio_global: number;
  img_url: string;
  imagen?: File;
  variantes?: any[];
}

export const productoToProductoBackend = (producto: Producto): ProductoBackend => {
  return {
    descripcion: producto.descripcion,
    categoria_id: parseInt(producto?.categoria_id?.toString() ?? '0'),
    observacion: producto.observacion ?? '',
    precio_global: producto.precio_global ?? 0,
    img_url: producto.img_url ?? '',
  };
};
