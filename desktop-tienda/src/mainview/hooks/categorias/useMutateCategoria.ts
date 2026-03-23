import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Categoria } from "../../interface";
import {
  startDeleteCategoria,
  startPostCategoria,
  startPutCategoria,
} from "../../actions/categoria.actions";

export const useMutateCategoria = () => {
  const queryClient = useQueryClient();

  const agregarCategoria = useMutation({
    mutationFn: async (categoria: Categoria) => {
      const res = await startPostCategoria(categoria);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categorias"] });
      queryClient.invalidateQueries({ queryKey: ["configuracion"] });
    },
  });

  const actualizarCategoria = useMutation({
    mutationFn: async (categoria: Categoria) => {
      const res = await startPutCategoria(categoria.id!, categoria);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categorias"] });
      queryClient.invalidateQueries({ queryKey: ["configuracion"] });
    },
  });

  const eliminarCategoria = useMutation({
    mutationFn: async (id: string) => {
      const res = await startDeleteCategoria(id);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categorias"] });
      queryClient.invalidateQueries({ queryKey: ["configuracion"] });
    },
  });

  return {
    agregarCategoria,
    actualizarCategoria,
    eliminarCategoria,
  };
};
