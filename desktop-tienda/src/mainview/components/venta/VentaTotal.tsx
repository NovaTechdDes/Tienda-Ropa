import { CheckCircle } from 'lucide-react';
import { useCarritoStore } from '../../store/carrito.store';
import { useMutateVentas } from '../../hooks/ventas/useMutateVentas';
import { Venta } from '../../interface/Venta';
import { mensaje } from '../../utils/mensaje';

export const VentaTotal = () => {
  const { descuento, setDescuento, total, cliente, metodoPago } = useCarritoStore();
  const { agregarVenta } = useMutateVentas();

  const handleAddVenta = async () => {
    if (!cliente) return;

    const venta: Venta = {
      cliente_id: cliente?.id,
      nombre_cliente: cliente?.nombre,
      telefono_cliente: cliente?.telefono,
      direccion_cliente: cliente?.direccion,
      dni_cliente: cliente?.dni,

      total: total - (total * descuento) / 100,
      descuento: descuento,
      subtotal: total,

      tipo_venta: 'CONTADO',
      metodo_pago: metodoPago,
    };

    const res = await agregarVenta.mutateAsync(venta);
    if (res) {
      mensaje('Venta agregada correctamente', 'success');
    } else {
      mensaje('Error al agregar venta', 'error');
    }
  };

  return (
    <div className="space-y-4 flex flex-col border border-gray-700 p-4 rounded-lg">
      <div className="flex justify-between">
        <p>Subtotal: </p>
        <p>$ {total.toFixed(2)}</p>
      </div>

      <div className="flex justify-between">
        <p>Descuento %: </p>
        <input type="number" value={descuento} onChange={(e) => setDescuento(Number(e.target.value))} className="w-60 text-right rounded-lg bg-gray-800 py-2 pr-2 text-yellow-500" placeholder="0.00" />
      </div>

      <div className="flex justify-between">
        <p>Total: </p>
        <p className="text-2xl font-bold text-yellow-500">$ {(total - (total * descuento) / 100).toFixed(2)}</p>
      </div>
      <button
        disabled={agregarVenta.isPending}
        onClick={handleAddVenta}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <CheckCircle />
        {agregarVenta.isPending ? 'Guardando...' : 'Confirmar Venta'}
      </button>
    </div>
  );
};
