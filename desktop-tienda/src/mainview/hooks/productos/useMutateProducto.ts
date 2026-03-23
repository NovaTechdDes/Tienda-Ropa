import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  postProducto,
  putProducto,
  deleteProducto,
} from "../../actions/producto.actions";

export const useMutateProducto = () => {
  const queryClient = useQueryClient();

  const crearProducto = useMutation({
    mutationFn: (producto: FormData) => postProducto(producto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productos"] });
    },
  });

  const modificarProducto = useMutation({
    mutationFn: (producto: FormData) => putProducto(producto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productos"] });
    },
  });

  const eliminarProducto = useMutation({
    mutationFn: (id: string) => deleteProducto(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productos"] });
    },
  });

  return {
    crearProducto,
    modificarProducto,
    eliminarProducto,
  };
};
