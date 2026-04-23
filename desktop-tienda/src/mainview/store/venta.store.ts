import { create } from 'zustand';
import { Venta } from '../interface/Venta';

interface VentaState {
  desde: string;
  hasta: string;

  setDesde: (desde: string) => void;
  setHasta: (hasta: string) => void;

  ventaBuscador: string;

  setVentaBuscador: (ventaBuscador: string) => void;

  ventas: Venta[];
  selectedVenta: Venta | null;
  isModalOpen: boolean;

  setSelectedVenta: (venta: Venta | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  setVentas: (ventas: Venta[]) => void;
}

export const useVentaStore = create<VentaState>()((set) => ({
  desde: new Date().toISOString().split('T')[0],
  hasta: new Date().toISOString().split('T')[0],

  ventaBuscador: '',

  ventas: [
    {
      fecha: new Date(),
      cliente_id: 1,
      nombre_cliente: 'Juan Pérez',
      dni_cliente: '35.123.456',
      subtotal: 55000,
      descuento: 5000,
      total: 50000,
      tipo_venta: 'Minorista',
      metodo_pago: 'Efectivo',
      detalles: [
        { variante_id: 101, cantidad: 2, precio: 15000 },
        { variante_id: 105, cantidad: 1, precio: 25000 }
      ]
    },
    {
      fecha: new Date(Date.now() - 86400000),
      cliente_id: 2,
      nombre_cliente: 'María García',
      dni_cliente: '40.987.654',
      subtotal: 120000,
      descuento: 20000,
      total: 100000,
      tipo_venta: 'Mayorista',
      metodo_pago: 'Transferencia',
      detalles: [
        { variante_id: 202, cantidad: 10, precio: 12000 }
      ]
    },
    {
      fecha: new Date(Date.now() - 172800000),
      cliente_id: 3,
      nombre_cliente: 'Roberto Sánchez',
      subtotal: 35000,
      descuento: 0,
      total: 35000,
      tipo_venta: 'Minorista',
      metodo_pago: 'Tarjeta',
      detalles: [
        { variante_id: 303, cantidad: 1, precio: 35000 }
      ]
    }
  ],

  selectedVenta: null,
  isModalOpen: false,

  setDesde: (desde: string) => set({ desde }),
  setHasta: (hasta: string) => set({ hasta }),
  setVentaBuscador: (ventaBuscador: string) => set({ ventaBuscador }),
  setVentas: (ventas: Venta[]) => set({ ventas }),
  setSelectedVenta: (selectedVenta: Venta | null) => set({ selectedVenta }),
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen }),
}));
