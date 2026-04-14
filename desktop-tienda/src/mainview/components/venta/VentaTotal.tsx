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
    <div className="bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-3xl p-4 shadow-[var(--atelier-shadow-md)] space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-xl bg-[var(--atelier-gold)]/10 flex items-center justify-center">
          <Wallet className="text-[var(--atelier-gold)]" size={16} />
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--atelier-parchment)]">Resumen</h3>
          <p className="text-[9px] text-[var(--atelier-parchment-muted)] font-medium uppercase tracking-tighter">Totalización</p>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-[var(--atelier-border)]">
        <div className="flex justify-between items-center">
          <p className="text-[10px] uppercase font-bold text-[var(--atelier-parchment-low)] tracking-widest">Subtotal</p>
          <p className="text-sm font-medium text-[var(--atelier-parchment)]">$ {total.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
        </div>

        <div className="flex justify-between items-center group">
          <div className="flex items-center gap-2">
            <Tag size={12} className="text-[var(--atelier-parchment-muted)]" />
            <p className="text-[10px] uppercase font-bold text-[var(--atelier-parchment-low)] tracking-widest">Descuento %</p>
          </div>
          <input 
            type="number" 
            value={descuento} 
            onChange={(e) => setDescuento(Number(e.target.value))} 
            className="w-20 text-right bg-[var(--atelier-ink)]/50 border border-[var(--atelier-border)] rounded-lg py-1 px-2 text-xs text-[var(--atelier-gold)] outline-none focus:border-[var(--atelier-gold)]/30" 
            placeholder="0" 
          />
        </div>

        <div className="pt-3 mt-2 border-t border-[var(--atelier-border)]">
          <div className="flex justify-between items-end">
            <p className="text-[10px] uppercase font-black text-[var(--atelier-gold)] tracking-[0.2em]">Total Final</p>
            <p className="text-2xl font-black text-[var(--atelier-parchment)] tracking-tighter">
              <span className="text-xs font-bold text-[var(--atelier-gold)] mr-1">$</span>
              {finalTotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>

      <button
        disabled={agregarVenta.isPending || !cliente || variantesCarrito.length === 0}
        onClick={handleAddVenta}
        className="w-full bg-[var(--atelier-gold)] hover:bg-[var(--atelier-gold-bright)] disabled:opacity-50 disabled:cursor-not-allowed text-[var(--atelier-ink)] font-black uppercase tracking-widest text-[10px] py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[var(--atelier-shadow-md)]"
      >
        <CheckCircle size={14} />
        {agregarVenta.isPending ? 'Procesando...' : 'Confirmar Venta'}
      </button>
    </div>
  );
};
