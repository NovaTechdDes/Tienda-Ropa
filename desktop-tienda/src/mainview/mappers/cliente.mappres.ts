import { Cliente } from '../interface/Cliente';

export interface ClienteBackend {
  id: number;
  nombre: string;
  dni: string;
  telefono: string;
  direccion: string;
  localidad: string;
  compras: number;
  gastado: number;
}

export const clienteMapper = (cliente: ClienteBackend): Cliente => {
  return {
    id: cliente.id,
    nombre: cliente.nombre,
    dni: cliente.dni,
    telefono: cliente.telefono,
    direccion: cliente.direccion,
    localidad: cliente.localidad,
    compras: cliente.compras,
    gastado: cliente.gastado,
    observacion: '',
    activo: true,
  };
};
