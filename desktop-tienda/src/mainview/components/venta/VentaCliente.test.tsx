import { describe, expect, it, mock, beforeEach } from 'bun:test';
import { render, screen } from '@testing-library/react';
import { VentaCliente } from './VentaCliente';
import { useCarritoStore } from '../../store';

const CLIENTES_DATA = [
  { id: 1, nombre: 'Juan Pérez', telefono: '123', direccion: 'Calle 1', dni: 'DNI1' },
  { id: 2, nombre: 'María García', telefono: '456', direccion: 'Calle 2', dni: 'DNI2' },
];

// Mock the hooks
mock.module('../../hooks', () => ({
  useClientes: () => ({
    data: CLIENTES_DATA,
    isLoading: false,
  }),
}));

describe('VentaCliente', () => {
  beforeEach(() => {
    useCarritoStore.getState().clearAll();
  });

  it('debería renderizar el selector de clientes', () => {
    render(<VentaCliente />);
    // Usamos querySelector como fallback si RTL falla en Bun
    const select = document.querySelector('select');
    expect(select).toBeTruthy();
    expect(screen.getByText('Seleccionar cliente')).toBeTruthy();
  });
});
