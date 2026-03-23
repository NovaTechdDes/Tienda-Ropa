import { useQuery } from "@tanstack/react-query";
import { startGetClientes } from "../../actions/cliente.actions";

export const useClientes = () => {
  return useQuery({
    queryKey: ["clientes"],
    queryFn: () => startGetClientes(),
  });
};
