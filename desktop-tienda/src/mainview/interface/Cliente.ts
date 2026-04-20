export interface Cliente {
  id?: number;
  nombre: string;
  telefono: string;
  dni: string;
  direccion: string;
  localidad: string;
  observacion: string;
  activo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  compras?: number;
  gastado?: number;
}
