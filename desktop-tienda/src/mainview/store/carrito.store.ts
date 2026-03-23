import { create } from "zustand";
import { Cliente } from "../interface/Cliente";

interface CarritoStore {
  cliente: Cliente | null;
  setCliente: (cliente: Cliente) => void;
  clearCliente: () => void;
}

export const useCarritoStore = create<CarritoStore>((set) => ({
  cliente: null,
  setCliente: (cliente: Cliente) => set({ cliente }),
  clearCliente: () => set({ cliente: null }),
}));
