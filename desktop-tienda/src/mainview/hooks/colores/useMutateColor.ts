import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Color } from "../../interface/Color";
import { startDeleteColor, startPostColor, startPutColor } from "../../actions/color.actions";

export const useMutateColor = () => {
    const queryClient = useQueryClient();


    const agregarColor = useMutation({
        mutationFn: async (color: Color) => {
            const res = await startPostColor(color);
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['colores'] });    
            queryClient.invalidateQueries({ queryKey: ['configuracion'] });
        },
        
    });

    const actualizarColor = useMutation({
        mutationFn: async (color: Color) => {
            const res = await startPutColor(color.id!, color);
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['colores'] });    
            queryClient.invalidateQueries({ queryKey: ['configuracion'] });
        },
        
    });

    const eliminarColor = useMutation({
        mutationFn: async (id: string) => {
            const res = await startDeleteColor(id);
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['colores'] });    
            queryClient.invalidateQueries({ queryKey: ['configuracion'] });
        },
        
    });


    return {
        agregarColor,
        actualizarColor,
        eliminarColor
    }
}