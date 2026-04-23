import { Marca } from '../interface/Marca';
import { db } from '../utils/db';

export const startPostMarca = async (marca: Marca): Promise<boolean> => {
  try {
    const { data } = await db().post('/marcas', marca);
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const startPutMarca = async (id: string, marca: Marca): Promise<boolean> => {
  try {
    const { data } = await db().put(`/marcas/${id}`, marca);
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const startDeleteMarca = async (id: string): Promise<boolean> => {
  try {
    const { data } = await db().delete(`/marcas/${id}`);
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
