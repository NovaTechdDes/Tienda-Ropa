import { db } from "../utils/db";

export const startPostProvedor = async (nombre: string): Promise<boolean> => {
  try {
    const { data } = await db().post("/provedor", { nombre });
    if (data.ok) {
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const startPutProvedor = async (
  id: string,
  nombre: string,
): Promise<boolean> => {
  try {
    const { data } = await db().put(`/provedor/${id}`, { nombre });
    if (data.ok) {
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const startDeleteProvedor = async (id: string): Promise<boolean> => {
  try {
    const { data } = await db().delete(`/provedor/${id}`);
    if (data.ok) {
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
