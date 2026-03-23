import { useQuery } from "@tanstack/react-query"
import { getConfiguracion } from "../../actions/configuracion.actions"

export const useConfiguracion = () => {
    return useQuery({
        queryKey: ['configuracion'],
        queryFn: () => getConfiguracion(),
    })
}