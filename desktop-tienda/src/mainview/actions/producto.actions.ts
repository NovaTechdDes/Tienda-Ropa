import { Producto } from '../interface/Producto';
import { db } from '../utils/db';

export const getProductos = async (buscador: string): Promise<Producto[]> => {
  try {
    const { data } = await db().get(`/productos?buscador=${buscador}`);

    if (data.ok) {
      return data.productos;
    }
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const deleteProducto = async (id: string): Promise<Boolean> => {
  try {
    const { data } = await db().delete(`/productos/${id}`);

    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }

  return false;
};

export const postProducto = async (producto: FormData): Promise<Boolean> => {
  try {
    const { data } = await db().post(`/productos`, producto);

    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }

  return false;
};

export const putProducto = async (producto: FormData): Promise<Boolean> => {
  try {
    const { data } = await db().put(`/productos/${producto.get('id')}`, producto);

    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }

  return false;
};
