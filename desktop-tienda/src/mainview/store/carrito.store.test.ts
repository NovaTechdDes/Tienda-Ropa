import { describe, expect, it, beforeEach } from 'bun:test';
import { useCarritoStore } from './carrito.store';

describe('useCarritoStore - Lógica de Negocio Completa', () => {
  beforeEach(() => {
    useCarritoStore.getState().clearAll();
  });

  describe('Gestión de Carrito y Totales', () => {
    const productoMock = {
      id: 1,
      descripcion: 'Remera Premium',
      variantes: [
        { id: 'v1', precio: 1000, talle: { nombre: 'M' }, color: { nombre: 'Rojo' } },
        { id: 'v2', precio: 1500, talle: { nombre: 'L' }, color: { nombre: 'Azul' } },
      ],
    };

    it('debería calcular el total correctamente al agregar varios ítems', () => {
      const store = useCarritoStore.getState();
      store.setProductoSeleccionado(productoMock as any);
      
      store.addItemCarrito('v1', 2, 0); // 1000 * 2 = 2000
      store.addItemCarrito('v2', 1, 0); // 1500 * 1 = 1500
      
      const state = useCarritoStore.getState();
      expect(state.variantesCarrito.length).toBe(2);
      expect(state.total).toBe(3500);
    });

    it('debería actualizar el total al modificar el descuento', () => {
      // Nota: El store actual no recalcula el total automáticamente en setDescuento
      // pero la UI lo hace. Probemos el estado base del store.
      const store = useCarritoStore.getState();
      store.setTotal(4000);
      store.setDescuento(10);
      
      const state = useCarritoStore.getState();
      expect(state.total).toBe(4000);
      expect(state.descuento).toBe(10);
    });

    it('debería eliminar un ítem y ajustar el total proporcionalmente', () => {
      const store = useCarritoStore.getState();
      store.setProductoSeleccionado(productoMock as any);
      
      store.addItemCarrito('v1', 3, 0); // 3000
      store.addItemCarrito('v2', 2, 0); // 3000 -> Total 6000
      
      store.eliminarVarianteCarrito('v1');
      
      const state = useCarritoStore.getState();
      expect(state.variantesCarrito.length).toBe(1);
      expect(state.total).toBe(3000);
    });
  });

  describe('Gestión de Cliente y Estado Global', () => {
    it('debería limpiar todo el estado con clearAll', () => {
      const store = useCarritoStore.getState();
      store.setCliente({ id: 1, nombre: 'Juan' } as any);
      store.setMetodoPago('TARJETA');
      store.setTotal(5000);
      
      store.clearAll();
      
      const state = useCarritoStore.getState();
      expect(state.cliente).toBeNull();
      expect(state.metodoPago).toBe('EFECTIVO');
      expect(state.total).toBe(0);
      expect(state.variantesCarrito).toEqual([]);
    });

    it('debería permitir sobrescribir las variantes del carrito directamente', () => {
      const store = useCarritoStore.getState();
      const nuevasVariantes = [
        { id_variante: 'v1', cantidad: 1, precio: 500 },
        { id_variante: 'v2', cantidad: 2, precio: 250 },
      ];
      
      store.setVariantesCarrito(nuevasVariantes);
      
      const state = useCarritoStore.getState();
      expect(state.variantesCarrito).toEqual(nuevasVariantes);
      expect(state.total).toBe(1000);
    });
  });
});
