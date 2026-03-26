import { create } from 'zustand';
import { Cliente } from '../interface/Cliente';
import { Producto } from '../interface/Producto';
interface CarritoStore {
  clearAll: () => void;

  cliente: Cliente | null;
  setCliente: (cliente: Cliente) => void;
  clearCliente: () => void;

  metodoPago: string;
  setMetodoPago: (metodoPago: string) => void;
  clearMetodoPago: () => void;

  productoSeleccionado: Producto | null;
  setProductoSeleccionado: (productoSeleccionado: Producto) => void;
  clearProductoSeleccionado: () => void;

  variantesCarrito: VarianteCarrito[];
  addItemCarrito: (id_variante: string, cantidad: number, precio: number) => void;
  setVariantesCarrito: (variantesCarrito: VarianteCarrito[]) => void;
  clearCarrito: () => void;
  eliminarVarianteCarrito: (id_variante: string) => void;

  descuento: number;
  setDescuento: (descuento: number) => void;
  clearDescuento: () => void;

  total: number;
  setTotal: (total: number) => void;
  clearTotal: () => void;
}

export const useCarritoStore = create<CarritoStore>((set) => ({
  clearAll: () => set({ cliente: null, metodoPago: 'EFECTIVO', productoSeleccionado: null, variantesCarrito: [], descuento: 0, total: 0 }),

  cliente: null,
  setCliente: (cliente: Cliente) => set({ cliente }),
  clearCliente: () => set({ cliente: null }),

  metodoPago: 'EFECTIVO',
  setMetodoPago: (metodoPago: string) => set({ metodoPago }),
  clearMetodoPago: () => set({ metodoPago: 'EFECTIVO' }),

  productoSeleccionado: null,
  setProductoSeleccionado: (productoSeleccionado: Producto) => set({ productoSeleccionado }),
  clearProductoSeleccionado: () => set({ productoSeleccionado: null }),

  variantesCarrito: [],
  addItemCarrito: (id_variante: string, cantidad: number, precioAux: number) =>
    set((state) => {
      const { variantesCarrito, productoSeleccionado, total } = state;

      // Buscamos la variante en el producto seleccionado para obtener el precio y nombres
      const varianteProducto = productoSeleccionado?.variantes?.find((v) => v.id == id_variante);

      if (!varianteProducto) return state;

      const precio = varianteProducto.precio && varianteProducto.precio !== 0 ? varianteProducto.precio : precioAux;
      const nombreProducto = productoSeleccionado?.descripcion || 'Sin nombre';
      const nombreVariante = `${varianteProducto.talle?.nombre || '-'}/${varianteProducto.color?.nombre || '-'}`;

      const itemExistente = variantesCarrito.find((v) => v.id_variante === id_variante);

      if (itemExistente) {
        // Si ya existe, actualizamos la cantidad
        return {
          variantesCarrito: variantesCarrito.map((v) => (v.id_variante === id_variante ? { ...v, cantidad: v.cantidad + cantidad } : v)),
          total: total + precio * cantidad,
        };
      }

      // Si es nuevo, lo agregamos

      return {
        variantesCarrito: [
          ...variantesCarrito,
          {
            id_variante,
            cantidad,
            precio,
            producto: nombreProducto,
            variante: nombreVariante,
          },
        ],
        total: total + precio * cantidad,
      };
    }),

  setVariantesCarrito: (variantesCarrito: VarianteCarrito[]) =>
    set({
      variantesCarrito,
      total: variantesCarrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    }),

  clearCarrito: () => set({ variantesCarrito: [], total: 0 }),

  eliminarVarianteCarrito: (id_variante: string) =>
    set((state) => {
      const itemAEliminar = state.variantesCarrito.find((v) => v.id_variante === id_variante);
      if (!itemAEliminar) return state;

      const subtotalARestar = itemAEliminar.precio * itemAEliminar.cantidad;

      return {
        variantesCarrito: state.variantesCarrito.filter((v) => v.id_variante !== id_variante),
        total: state.total - subtotalARestar,
      };
    }),

  descuento: 0,
  setDescuento: (descuento: number) => set({ descuento }),
  clearDescuento: () => set({ descuento: 0 }),

  total: 0,
  setTotal: (total: number) => set({ total }),
  clearTotal: () => set({ total: 0 }),
}));

export interface VarianteCarrito {
  id_variante: string;
  cantidad: number;
  precio: number;
  producto?: string;
  variante?: string;
}
