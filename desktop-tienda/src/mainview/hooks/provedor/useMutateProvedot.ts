import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  startDeleteProvedor,
  startPostProvedor,
  startPutProvedor,
} from "../../actions/provedor.actions";

export const useMutateProvedor = () => {
  const queryClient = useQueryClient();

  const crearProvedor = useMutation({
    mutationFn: (nombre: string) => startPostProvedor(nombre),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["configuracion"] });
    },
  });

  const actualizarProvedor = useMutation({
    mutationFn: ({ id, nombre }: { id: string; nombre: string }) =>
      startPutProvedor(id, nombre),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["configuracion"] });
    },
  });

  const eliminarProvedor = useMutation({
    mutationFn: (id: string) => startDeleteProvedor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["configuracion"] });
    },
  });

  return {
    crearProvedor,
    actualizarProvedor,
    eliminarProvedor,
  };
};
