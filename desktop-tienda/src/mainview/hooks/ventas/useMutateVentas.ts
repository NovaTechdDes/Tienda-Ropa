import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Venta } from '../../interface/Venta';
import { startPostVenta } from '../../actions/venta.actions';

export const useMutateVentas = () => {
  const query = useQueryClient();

  const agregarVenta = useMutation({
    mutationFn: (venta: Venta) => startPostVenta(venta),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ['ventas'] });
      query.invalidateQueries({ queryKey: ['productos'] });
    },
  });

  return {
    agregarVenta,
  };
};
