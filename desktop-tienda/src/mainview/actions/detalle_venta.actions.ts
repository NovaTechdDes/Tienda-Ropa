import { db } from '../utils/db';

export const getDetalleVenta = async (venta_id: number) => {
  try {
    const { data } = await db().get(`/detalle_venta/productos/${venta_id}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
