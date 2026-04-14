import { CreditCard } from "lucide-react";
import { useCarritoStore } from "../../store";

export const VentaMetodoPago = () => {

  const { metodoPago, setMetodoPago } = useCarritoStore();

  return (
    <div className="bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-3xl p-4 shadow-[var(--atelier-shadow-md)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-xl bg-[var(--atelier-gold)]/10 flex items-center justify-center">
          <CreditCard className="text-[var(--atelier-gold)]" size={16} />
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--atelier-parchment)]">
            Método de Pago
          </h3>
          <p className="text-[9px] text-[var(--atelier-parchment-muted)] font-medium uppercase tracking-tighter">
            Facturación y Cobro
          </p>
        </div>
      </div>
      
      <div className="py-4 text-center bg-[var(--atelier-ink)]/50 rounded-2xl border border-dashed border-[var(--atelier-border)]">
        <div className="flex flex-col gap-2">
          <button onClick={() => setMetodoPago('EFECTIVO')} className={`px-4 py-1.5 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-[10px] transition-all ${metodoPago === 'EFECTIVO' ? 'bg-[var(--atelier-gold)] text-[var(--atelier-ink)] shadow-[var(--atelier-shadow-sm)]' : 'bg-[var(--atelier-gold)]/10 text-[var(--atelier-gold)]'}`}>
            Efectivo
          </button>
          <button onClick={() => setMetodoPago('TRANSFERENCIA')} className={`px-4 py-1.5 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-[10px] transition-all ${metodoPago === 'TRANSFERENCIA' ? 'bg-[var(--atelier-gold)] text-[var(--atelier-ink)] shadow-[var(--atelier-shadow-sm)]' : 'bg-[var(--atelier-gold)]/10 text-[var(--atelier-gold)]'}`}>
            Transferencia
          </button>
          <button onClick={() => setMetodoPago('TARJETA')} className={`px-4 py-1.5 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-[10px] transition-all ${metodoPago === 'TARJETA' ? 'bg-[var(--atelier-gold)] text-[var(--atelier-ink)] shadow-[var(--atelier-shadow-sm)]' : 'bg-[var(--atelier-gold)]/10 text-[var(--atelier-gold)]'}`}>
            Tarjeta
          </button>
        </div>
      </div>
    </div>
  );
};
