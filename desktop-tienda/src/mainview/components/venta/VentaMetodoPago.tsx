import { CreditCard } from "lucide-react";

export const VentaMetodoPago = () => {
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
      
      <div className="py-8 text-center bg-[#0a0a0b]/50 rounded-2xl border border-dashed border-white/10">
        <p className="text-xs text-[#3f3f46] font-medium uppercase tracking-widest">
          Configuración próximamente
        </p>
      </div>
    </div>
  );
};
