import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTalle, postTalle, putTalle } from "../../actions/talles.actions"
import { Talle } from "../../interface/Talle";

export const useMutateTalles = () => {
    const queryClient = useQueryClient();

    const crearTalle = useMutation({
        mutationFn: (talle: Talle) => postTalle(talle),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['talles'] });
            queryClient.invalidateQueries({ queryKey: ['configuracion'] });
        },
    })

    const actualizarTalle = useMutation({
        mutationFn: (talle: Talle) => putTalle(talle.id!, talle),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['talles'] });
            queryClient.invalidateQueries({ queryKey: ['configuracion'] });
        },
    })

    const eliminarTalle = useMutation({
        mutationFn: (id: string) => deleteTalle(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['talles'] });
            queryClient.invalidateQueries({ queryKey: ['configuracion'] });
        },
    })

    

    return {
        crearTalle,
        actualizarTalle,
        eliminarTalle
    }
}