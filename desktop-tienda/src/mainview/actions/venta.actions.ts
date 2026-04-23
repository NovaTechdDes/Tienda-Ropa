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

export const startGetVentas = async (desde: string, hasta: string, tipo: string, buscador: string): Promise<Venta[]> => {
  try {
    console.log(desde, hasta, tipo, buscador);
    const { data } = await db().get('/ventas', {
      params: {
        desde,
        hasta,
        tipo,
        buscador,
      },
    });

    if (data.ok) {
      return data.ventas;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
