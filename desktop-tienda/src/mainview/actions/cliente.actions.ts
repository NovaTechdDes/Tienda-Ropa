import { Cliente } from '../interface/Cliente';
import { ClienteBackend, clienteMapper } from '../mappers/cliente.mappres';
import { db } from '../utils/db';

export const startPostCliente = async (cliente: Cliente) => {
  try {
    const { data } = await db().post('/clientes', cliente);
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const startGetClientes = async (): Promise<Cliente[]> => {
  try {
    const { data } = await db().get('/clientes');
    if (data.ok) {
      const clientesMappeados = data.clientes.map((cliente: ClienteBackend) => clienteMapper(cliente));

      return clientesMappeados;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const startPutCliente = async (id: number, cliente: Partial<Cliente>) => {
  try {
    const { data } = await db().put(`/clientes/${id}`, cliente);
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const startDeleteCliente = async (id: number) => {
  try {
    const { data } = await db().delete(`/clientes/${id}`);
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
