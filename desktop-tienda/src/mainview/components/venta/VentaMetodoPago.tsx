import { CreditCard } from "lucide-react";
import { useCarritoStore } from "../../store";

export const VentaMetodoPago = () => {

  const { metodoPago, setMetodoPago } = useCarritoStore();

  return (
    <div className="bg-[#141416] border border-white/5 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
          <CreditCard className="text-[#d4af37]" size={20} />
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#f5f5f0]">
            Método de Pago
          </h3>
          <p className="text-[10px] text-[#a1a1aa] font-medium uppercase tracking-tighter">
            Facturación y Cobro
          </p>
        </div>
      </div>
      
      <div className="py-8 text-center  bg-[#0a0a0b]/50 rounded-2xl border border-dashed border-white/10">
        
        <div className="flex flex-col   gap-4">
          <button onClick={() => setMetodoPago('EFECTIVO')} className={`px-4 py-2 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-xs ${metodoPago === 'EFECTIVO' ? 'bg-[#d4af37] text-[#0a0a0b]' : 'bg-[#d4af37]/10 text-[#d4af37]'}`}>
            Efectivo
          </button>
          <button onClick={() => setMetodoPago('TRANSFERENCIA')} className={`px-4 py-2 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-xs ${metodoPago === 'TRANSFERENCIA' ? 'bg-[#d4af37] text-[#0a0a0b]' : 'bg-[#d4af37]/10 text-[#d4af37]'}`}>
            Transferencia
          </button>
          <button onClick={() => setMetodoPago('TARJETA')} className={`px-4 py-2 rounded-lg mx-2 text-left font-bold uppercase tracking-widest text-xs ${metodoPago === 'TARJETA' ? 'bg-[#d4af37] text-[#0a0a0b]' : 'bg-[#d4af37]/10 text-[#d4af37]'}`}>
            Tarjeta
          </button>
        </div>
      </div>
    </div>
  );
};
