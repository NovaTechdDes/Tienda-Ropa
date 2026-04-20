import { CreditCard } from "lucide-react";
import { useCarritoStore } from "../../store";

export const VentaMetodoPago = () => {

  const { metodoPago, setMetodoPago } = useCarritoStore();

  return (
    <div className="bg-[var(--atelier-surface-1)] border border-black/60 rounded-3xl p-5 shadow-2xl">
      <div className="flex items-center gap-3 mb-5 pb-2 border-b border-black/5">
        <div className="w-9 h-9 rounded-xl bg-[var(--primary-soft)] flex items-center justify-center">
          <CreditCard className="text-[var(--primary)]" size={18} />
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.1em] text-[var(--atelier-parchment)]">
            Método de Pago
          </h3>
          <p className="text-[9px] text-[var(--secondary)] font-bold uppercase tracking-widest">
            Facturación y Cobro
          </p>
        </div>
      </div>
      
      <div className="p-2 bg-black/10 rounded-2xl border border-black/10">
        <div className="flex flex-col gap-2">
          {['EFECTIVO', 'TRANSFERENCIA', 'TARJETA'].map((metodo) => (
            <button 
              key={metodo}
              onClick={() => setMetodoPago(metodo as any)} 
              className={`px-4 py-3 rounded-xl text-left font-black uppercase tracking-widest text-[10px] transition-all transform active:scale-95 ${
                metodoPago === metodo 
                  ? 'bg-[var(--primary)] text-[var(--neutral)] shadow-lg shadow-[var(--primary)]/20' 
                  : 'bg-[var(--atelier-ink)] text-[var(--atelier-parchment-muted)] border border-black/5 hover:bg-black/20'
              }`}
            >
              {metodo.charAt(0) + metodo.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
