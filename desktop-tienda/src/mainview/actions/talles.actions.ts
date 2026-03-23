import { Talle } from "../interface/Talle";
import { db } from "../utils/db"

export const getTalles = async(): Promise<Talle[]> => {
    try {
        const { data } = await db().get('/talles');

        if(data.ok){
            return data.talles;
        }
    } catch (error) {
        console.error(error);
    }
    return []
};

export const postTalle = async(talle: Talle): Promise<boolean> => {
    try {
        const { data } = await db().post('/talles', talle);
        console.log(data)

        if(data.ok){
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return false
};


export const putTalle = async(id: string, talle: Talle): Promise<boolean> => {
    try {
        const { data } = await db().put(`/talles/${id}`, talle);

        if(data.ok){
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return false
};


export const deleteTalle = async(id: string): Promise<boolean> => {
    try {
        const { data } = await db().delete(`/talles/${id}`);

        if(data.ok){
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return false
};
