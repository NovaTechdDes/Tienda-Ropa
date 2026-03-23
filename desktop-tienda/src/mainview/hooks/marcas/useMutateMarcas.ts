import { useMutation, useQueryClient } from "@tanstack/react-query"
import { startDeleteMarca, startPostMarca, startPutMarca } from "../../actions/marca.actions";
import { Marca } from "../../interface/Marca";

export const useMutateMarcas = () => {
    const queryClient = useQueryClient();


    const agregarMarca = useMutation({
        mutationFn: (marca: Marca) => startPostMarca(marca),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['marcas'] });
        }
    })

    const actualizarMarca = useMutation({
        mutationFn: (marca: Marca) => startPutMarca(marca.id!, marca),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['marcas'] });
        }
    })

    const eliminarMarca = useMutation({
        mutationFn: (id: string) => startDeleteMarca(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['marcas'] });
        }
    })

    return {
        agregarMarca,
        actualizarMarca,
        eliminarMarca
    }
}