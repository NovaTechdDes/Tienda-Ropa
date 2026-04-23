import { useQuery } from '@tanstack/react-query';
import { startGetVentas } from '../../actions/venta.actions';

export const useVentas = (desde: string, hasta: string, tipo: string, buscador: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['ventas', desde, hasta, tipo, buscador],
    queryFn: () => startGetVentas(desde, hasta, tipo, buscador),
  });

  return {
    data,
    isLoading,
    error,
  };
};
