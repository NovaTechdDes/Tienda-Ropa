import { db } from '../utils/db';

export const getConfiguracion = async () => {
  try {
    const { data } = await db().get('/configuracion-data');
    if (data.ok) {
      return { ...data };
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
