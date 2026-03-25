import { CheckCircle } from 'lucide-react';
import { useCarritoStore } from '../../store/carrito.store';

export const VentaTotal = () => {
  const { descuento, setDescuento, total } = useCarritoStore();

  const handleAddVenta = () => {};

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
      <button onClick={handleAddVenta} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
        <CheckCircle />
        Confirmar Venta
      </button>
    </div>
  );
};
