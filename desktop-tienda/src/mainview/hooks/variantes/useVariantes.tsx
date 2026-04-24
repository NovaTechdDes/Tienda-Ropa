import { useQuery } from '@tanstack/react-query';
import { getVariantes } from '../../actions/producto.actions';

export const useVariantes = (buscador: string) => {
  return useQuery({
    queryKey: ['variantes', buscador],
    queryFn: () => getVariantes(buscador),
  });
};
