import { create } from 'zustand';
import { Producto } from '../interface/Producto';
import { Variante_Producto } from '../interface/Variante_Producto';

interface MovimientoState {
  productoSeleccionado: Producto | null;
  varianteSeleccionado: Variante_Producto | null;
  setProductoSeleccionado: (producto: Producto | null) => void;
  setVarianteSeleccionado: (variante: Variante_Producto | null) => void;
}

export const useMovimientoStore = create<MovimientoState>((set) => ({
  productoSeleccionado: null,
  varianteSeleccionado: null,
  setProductoSeleccionado: (producto: Producto | null) => set({ productoSeleccionado: producto }),
  setVarianteSeleccionado: (variante: Variante_Producto | null) => set({ varianteSeleccionado: variante }),
}));
