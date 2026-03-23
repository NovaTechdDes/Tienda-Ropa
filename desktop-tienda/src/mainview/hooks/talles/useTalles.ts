import { useQuery } from "@tanstack/react-query"
import { getTalles } from "../../actions/talles.actions"

export const useTalles = () => {
    return useQuery({
        queryKey: ['talles'],
        queryFn: () => getTalles(),
    })
}