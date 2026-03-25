import { CreditCard } from "lucide-react";
import { useCarritoStore } from "../../store";

export const VentaMetodoPago = () => {

  const { metodoPago, setMetodoPago } = useCarritoStore();

  return (
    <div className="bg-[#141416] border border-white/5 rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
          <CreditCard className="text-[#d4af37]" size={16} />
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#f5f5f0]">
            Método de Pago
          </h3>
          <p className="text-[9px] text-[#a1a1aa] font-medium uppercase tracking-tighter">
            Facturación y Cobro
          </p>
        </div>
      </div>
      
      <div className="py-4 text-center bg-[#0a0a0b]/50 rounded-2xl border border-dashed border-white/10">
        <div className="flex flex-col gap-2">
          <button onClick={() => setMetodoPago('EFECTIVO')} className={`px-4 py-1.5 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-[10px] ${metodoPago === 'EFECTIVO' ? 'bg-[#d4af37] text-[#0a0a0b]' : 'bg-[#d4af37]/10 text-[#d4af37]'}`}>
            Efectivo
          </button>
          <button onClick={() => setMetodoPago('TRANSFERENCIA')} className={`px-4 py-1.5 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-[10px] ${metodoPago === 'TRANSFERENCIA' ? 'bg-[#d4af37] text-[#0a0a0b]' : 'bg-[#d4af37]/10 text-[#d4af37]'}`}>
            Transferencia
          </button>
          <button onClick={() => setMetodoPago('TARJETA')} className={`px-4 py-1.5 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-[10px] ${metodoPago === 'TARJETA' ? 'bg-[#d4af37] text-[#0a0a0b]' : 'bg-[#d4af37]/10 text-[#d4af37]'}`}>
            Tarjeta
          </button>
        </div>
      </div>
    </div>
  );
};
