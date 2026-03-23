import { Color } from "../interface/Color";
import { db } from "../utils/db";

export const startPostColor = async (color: Color): Promise<boolean> => {
  try {
    const { data } = await db().post("/colores", color);
    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const startPutColor = async (
  id: string,
  color: Color,
): Promise<boolean> => {
  try {
    const { data } = await db().put(`/colores/${id}`, color);
    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const startDeleteColor = async (id: string): Promise<boolean> => {
  try {
    const { data } = await db().delete(`/colores/${id}`);

    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};
