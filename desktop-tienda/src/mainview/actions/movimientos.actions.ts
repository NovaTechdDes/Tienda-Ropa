import { MovimientoVariante } from '../interface/MovimientoVariante';
import { db } from '../utils/db';

export const postMovimientoVariante = async (movimiento: MovimientoVariante): Promise<Boolean> => {
  try {
    const { data } = await db().post(`/movimientos-variantes`, movimiento);

    if (data.ok) {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
