import { describe, expect, it, mock, beforeEach } from 'bun:test';
import { render, screen, fireEvent } from '@testing-library/react';
import { VentaTotal } from './VentaTotal';
import { useCarritoStore } from '../../store';
import React from 'react';

// Mock the hooks
mock.module('../../hooks/ventas/useMutateVentas', () => ({
  useMutateVentas: () => ({
    agregarVenta: {
      mutateAsync: mock(async () => true),
      isPending: false,
    },
  }),
}));

mock.module('../../utils/mensaje', () => ({
  mensaje: mock(() => {}),
}));

describe('VentaTotal', () => {
  beforeEach(() => {
    useCarritoStore.getState().clearAll();
  });

  it('debería calcular el total con descuento correctamente', () => {
    useCarritoStore.setState({ 
      total: 1000, 
      descuento: 10,
      cliente: { id: 1, nombre: 'Test' } as any,
      variantesCarrito: [{ id_variante: '1', cantidad: 1, precio: 1000 }]
    });

    render(<VentaTotal />);
    
    // Subtotal 1000, Descuento 10% -> Total 900
    expect(screen.getByText(/900,00/)).toBeTruthy();
  });

  it('debería deshabilitar el botón si no hay cliente o productos', () => {
    render(<VentaTotal />);
    const button = screen.getByRole('button', { name: /Confirmar Venta/i }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});
