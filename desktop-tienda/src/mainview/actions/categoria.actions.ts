import { Categoria } from "../interface";
import { db } from "../utils/db";

export const startPostCategoria = async (
  categoria: Categoria,
): Promise<boolean> => {
  try {
    const { data } = await db().post("/categorias", categoria);
    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const startPutCategoria = async (
  id: string,
  categoria: Categoria,
): Promise<boolean> => {
  try {
    const { data } = await db().put(`/categorias/${id}`, categoria);
    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const startDeleteCategoria = async (id: string): Promise<boolean> => {
  try {
    const { data } = await db().delete(`/categorias/${id}`);
    if (data.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};
