import { create } from "zustand";
import { Cliente } from "../interface/Cliente";
import { Producto } from "../interface/Producto";

interface CarritoStore {
  cliente: Cliente | null;
  setCliente: (cliente: Cliente) => void;
  clearCliente: () => void;


  metodoPago: string;
  setMetodoPago: (metodoPago: string) => void;
  clearMetodoPago: () => void;


  productoSeleccionado: Producto | null;
  setProductoSeleccionado: (productoSeleccionado: Producto) => void;
  clearProductoSeleccionado: () => void;
}

export const useCarritoStore = create<CarritoStore>((set) => ({
  cliente: null,
  setCliente: (cliente: Cliente) => set({ cliente }),
  clearCliente: () => set({ cliente: null }),

  metodoPago: 'EFECTIVO',
  setMetodoPago: (metodoPago: string) => set({ metodoPago }),
  clearMetodoPago: () => set({ metodoPago: 'EFECTIVO' }),


  productoSeleccionado: null,
  setProductoSeleccionado: (productoSeleccionado: Producto) => set({ productoSeleccionado }),
  clearProductoSeleccionado: () => set({ productoSeleccionado: null }),
}));
