import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MovimientoVariante } from '../../interface/MovimientoVariante';
import { postMovimientoVariante } from '../../actions/movimientos.actions';

export const useMutateMovimientoVariante = () => {
  const queryClient = useQueryClient();

  const addMovimiento = useMutation({
    mutationFn: (data: MovimientoVariante) => {
      return postMovimientoVariante(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['variantes'],
      });
      queryClient.invalidateQueries({
        queryKey: ['productos'],
      });
    },
  });

  return {
    addMovimiento,
  };
};
