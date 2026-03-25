import { useQuery } from '@tanstack/react-query';
import { startGetVentas } from '../../actions/venta.actions';

export const useVentas = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['ventas'],
    queryFn: () => startGetVentas(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
