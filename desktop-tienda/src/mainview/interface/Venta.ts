export interface Venta {
  fecha?: Date;
  id: number;

  cliente_id: number;
  nombre_cliente?: string;
  telefono_cliente?: string;
  direccion_cliente?: string;
  dni_cliente?: string;

  total: number;
  descuento: number;
  subtotal: number;

  tipo_venta: string;
  metodo_pago: string;

  detalles: Detalle[];
}

export interface Detalle {
  variante_id: number;
  cantidad: number;
  precio: number;
}
