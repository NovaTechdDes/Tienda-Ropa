import { Venta } from '../interface/Venta';
import { db } from '../utils/db';

export const startPostVenta = async (venta: Venta): Promise<boolean> => {
  try {
    const { data } = await db().post('/ventas', venta);

    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const startGetVentas = async (): Promise<Venta[]> => {
  try {
    const { data } = await db().get('/ventas');
    if (data.ok) {
      return data.ventas;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
