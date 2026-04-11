import { create } from "zustand";
import { Cliente } from "../interface/Cliente";

interface ClienteStore {
    modal: boolean;
    openModal: () => void;
    closeModale: () => void;

    clienteSeleccionado: Cliente | null;
    setClienteSeleccionado: (cliente: Cliente) => void;

    buscador: string;
    setBuscador: (buscador: string) => void;
};


export const useClientestore = create<ClienteStore>((set) => ({
    modal: false,
    openModal: () => set({ modal: true }),
    closeModale: () => set({ modal: false, clienteSeleccionado: null }),

    clienteSeleccionado: null,
    setClienteSeleccionado: (cliente: Cliente) => set({ clienteSeleccionado: cliente }),

    buscador: '',
    setBuscador: (buscador: string) => set({ buscador }),
}));