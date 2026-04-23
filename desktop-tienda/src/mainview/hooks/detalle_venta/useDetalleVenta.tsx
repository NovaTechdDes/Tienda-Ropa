import { useQuery } from '@tanstack/react-query';
import { getDetalleVenta } from '../../actions/detalle_venta.actions';

export const useDetalleVenta = (id_venta: number) => {
  return useQuery({
    queryKey: ['detalle-venta', id_venta],
    queryFn: () => getDetalleVenta(id_venta),
    enabled: !!id_venta,
  });
};
