export interface MovimientoVariante {
  id?: string;
  variante_id: string;
  tipo: 'ingreso' | 'egreso';
  cantidad: number;
  referencia: string;
  fecha: Date;
}
