import { create } from "zustand";
import { Producto } from "../interface/Producto";

interface ProductoStore {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;

  productoSeleccionado: Producto | null;
  setProductoSeleccionado: (producto: Producto) => void;
}

export const useProductoStore = create<ProductoStore>((set) => ({
  modal: false,
  openModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),

  productoSeleccionado: null,
  setProductoSeleccionado: (producto: Producto) =>
    set({ productoSeleccionado: producto }),
}));
