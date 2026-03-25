import { CheckCircle, Tag, Wallet } from 'lucide-react';
import { useCarritoStore } from '../../store/carrito.store';
import { useMutateVentas } from '../../hooks/ventas/useMutateVentas';
import { Venta } from '../../interface/Venta';
import { mensaje } from '../../utils/mensaje';

export const VentaTotal = () => {
  const { descuento, setDescuento, total, cliente, metodoPago, variantesCarrito, clearAll } = useCarritoStore();
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

      detalles: variantesCarrito.map((variante) => ({
        variante_id: Number(variante.id_variante),
        cantidad: variante.cantidad,
        precio: variante.precio,
      })),
    };

    const res = await agregarVenta.mutateAsync(venta);
    if (res) {
      mensaje('Venta agregada correctamente', 'success');
      clearAll();
    } else {
      mensaje('Error al agregar venta', 'error');
    }
  };

  const finalTotal = total - (total * descuento) / 100;

  return (
    <div className="bg-[#141416] border border-white/5 rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.4)] space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
          <Wallet className="text-[#d4af37]" size={16} />
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#f5f5f0]">Resumen</h3>
          <p className="text-[9px] text-[#a1a1aa] font-medium uppercase tracking-tighter">Totalización</p>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-white/5">
        <div className="flex justify-between items-center">
          <p className="text-[10px] uppercase font-bold text-[#3f3f46] tracking-widest">Subtotal</p>
          <p className="text-sm font-medium text-[#f5f5f0]">$ {total.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
        </div>

        <div className="flex justify-between items-center group">
          <div className="flex items-center gap-2">
            <Tag size={12} className="text-[#a1a1aa]" />
            <p className="text-[10px] uppercase font-bold text-[#3f3f46] tracking-widest">Descuento %</p>
          </div>
          <input 
            type="number" 
            value={descuento} 
            onChange={(e) => setDescuento(Number(e.target.value))} 
            className="w-20 text-right bg-[#0a0a0b]/50 border border-white/5 rounded-lg py-1 px-2 text-xs text-[#d4af37] outline-none focus:border-[#d4af37]/30" 
            placeholder="0" 
          />
        </div>

        <div className="pt-3 mt-2 border-t border-white/5">
          <div className="flex justify-between items-end">
            <p className="text-[10px] uppercase font-black text-[#d4af37] tracking-[0.2em]">Total Final</p>
            <p className="text-2xl font-black text-[#f5f5f0] tracking-tighter">
              <span className="text-xs font-bold text-[#d4af37] mr-1">$</span>
              {finalTotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>

      <button
        disabled={agregarVenta.isPending || !cliente || variantesCarrito.length === 0}
        onClick={handleAddVenta}
        className="w-full bg-[#d4af37] hover:bg-[#b89630] disabled:opacity-50 disabled:cursor-not-allowed text-[#0a0a0b] font-black uppercase tracking-widest text-[10px] py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.3)]"
      >
        <CheckCircle size={14} />
        {agregarVenta.isPending ? 'Procesando...' : 'Confirmar Venta'}
      </button>
    </div>
  );
};
