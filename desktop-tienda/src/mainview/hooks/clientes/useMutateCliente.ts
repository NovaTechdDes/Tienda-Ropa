import { useMutation, useQueryClient } from "@tanstack/react-query"
import { startDeleteCliente } from "../../actions/cliente.actions";

export const useMutateCliente = () => {
    const queryClient = useQueryClient();


    const deleteCliente = useMutation({
        mutationFn: (id: number) => startDeleteCliente(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clientes'] });
        },
    });

    return {
        deleteCliente
    }
}