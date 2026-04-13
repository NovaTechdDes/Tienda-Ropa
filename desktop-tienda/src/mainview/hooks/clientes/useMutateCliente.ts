import { useMutation, useQueryClient } from '@tanstack/react-query';
import { startDeleteCliente, startPostCliente, startPutCliente } from '../../actions/cliente.actions';
import { Cliente } from '../../interface/Cliente';

export const useMutateCliente = () => {
  const queryClient = useQueryClient();

  const postCliente = useMutation({
    mutationFn: (cliente: Cliente) => startPostCliente(cliente),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
    },
  });

  const updateCliente = useMutation({
    mutationFn: (cliente: Partial<Cliente>) => startPutCliente(cliente.id!, cliente),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
    },
  });

  const deleteCliente = useMutation({
    mutationFn: (id: number) => startDeleteCliente(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
    },
  });

  return {
    deleteCliente,
    updateCliente,
    postCliente,
  };
};
