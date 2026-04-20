import { CheckCircle, Tag, Wallet } from 'lucide-react';
import { useCarritoStore } from '../../store/carrito.store';
import { useMutateVentas } from '../../hooks/ventas/useMutateVentas';
import { Venta } from '../../interface/Venta';
import { mensaje } from '../../utils/mensaje';

export const VentaTotal = () => {
  const { descuento, setDescuento, total, cliente, metodoPago, variantesCarrito, clearAll } = useCarritoStore();
  const { agregarVenta } = useMutateVentas();

  const handleAddVenta = async () => {
    if (!cliente?.id) return;

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
    <div className="bg-[var(--atelier-surface-1)] border border-black/60 rounded-3xl p-5 shadow-2xl space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-xl bg-[var(--primary-soft)] flex items-center justify-center">
          <Wallet className="text-[var(--primary)]" size={18} />
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.1em] text-[var(--atelier-parchment)]">Resumen Final</h3>
          <p className="text-[9px] text-[var(--secondary)] font-bold uppercase tracking-widest">Totalización de Venta</p>
        </div>
      </div>
 
      <div className="space-y-3 pt-4 border-t border-black/10">
        <div className="flex justify-between items-center px-1">
          <p className="text-[10px] uppercase font-bold text-[var(--secondary)] tracking-[0.15em]">Subtotal</p>
          <p className="text-sm font-bold text-[var(--atelier-parchment)] tabular-nums">$ {total.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
        </div>
 
        <div className="flex justify-between items-center group px-1">
          <div className="flex items-center gap-2">
            <Tag size={14} className="text-[var(--secondary)]/60" />
            <p className="text-[10px] uppercase font-bold text-[var(--secondary)] tracking-[0.15em]">Descuento %</p>
          </div>
          <input 
            type="number" 
            value={descuento} 
            onChange={(e) => setDescuento(Number(e.target.value))} 
            className="w-24 text-right bg-[var(--atelier-ink)] border border-black/10 focus:border-[var(--primary)]/30 rounded-xl py-1.5 px-3 text-xs text-[var(--primary)] font-black outline-none transition-all shadow-inner" 
            placeholder="0" 
          />
        </div>
 
        <div className="pt-5 mt-4 border-t border-black/10">
          <div className="flex justify-between items-end bg-black/5 p-4 rounded-2xl border border-black/5 shadow-inner">
            <div>
              <p className="text-[10px] uppercase font-black text-[var(--secondary)] tracking-[0.2em] mb-1">Total a Pagar</p>
              <div className="h-1 w-12 bg-[var(--primary)] rounded-full opacity-60" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-[var(--tertiary)] tracking-tight tabular-nums">
                <span className="text-sm font-bold opacity-60 mr-1">$</span>
                {finalTotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>
      </div>
 
      <button
        disabled={agregarVenta.isPending || !cliente || variantesCarrito.length === 0}
        onClick={handleAddVenta}
        className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed text-[var(--neutral)] font-black uppercase tracking-[0.2em] text-[11px] py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[var(--primary)]/30 transform active:scale-95 translate-y-0 hover:-translate-y-1"
      >
        <CheckCircle size={18} />
        {agregarVenta.isPending ? 'Procesando Venta...' : 'Confirmar Venta'}
      </button>
    </div>
  );
};
