import { Loader2, User } from 'lucide-react';
import { useClientes } from '../../hooks';
import { useCarritoStore } from '../../store';
import { Cliente } from '../../interface/Cliente';

export const VentaCliente = () => {
  const { cliente, setCliente, clearCliente } = useCarritoStore();
  const { data: clientes, isLoading } = useClientes();

  const handleClienteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cliente = clientes?.find((cliente: Cliente) => cliente.id === Number(e.target.value));
    if (cliente) {
      setCliente(cliente);
    } else {
      clearCliente();
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12 bg-[#141416] rounded-3xl border border-white/5">
        <Loader2 className="animate-spin text-[#d4af37]" />
      </div>
    );
  }

  return (
    <div className="bg-[#141416] border border-white/5 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
          <User className="text-[#d4af37]" size={20} />
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#f5f5f0]">Cliente</h3>
          <p className="text-[10px] text-[#a1a1aa] font-medium uppercase tracking-tighter">Selección y Datos</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Selector de Cliente */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[#a1a1aa] font-bold ml-1">Buscar Cliente</label>
          <div className="relative">
            <select
              name="cliente"
              id="cliente"
              className="w-full bg-[#0a0a0b] border border-white/5 focus:border-[#d4af37]/30 rounded-xl py-3 px-4 text-sm text-[#f5f5f0] outline-none transition-all appearance-none cursor-pointer"
              onChange={handleClienteChange}
            >
              <option value="">Seleccionar cliente</option>
              {clientes?.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nombre}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#3f3f46]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Detalle del Cliente */}
        <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/5">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#3f3f46] font-bold ml-1">Teléfono</label>
            <input
              type="text"
              readOnly
              className="w-full bg-[#0a0a0b]/50 border border-white/5 rounded-xl py-3 px-4 text-sm text-[#a1a1aa] outline-none"
              value={cliente?.telefono || ''}
              placeholder="N/A"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#3f3f46] font-bold ml-1">Dirección</label>
            <input
              type="text"
              readOnly
              className="w-full bg-[#0a0a0b]/50 border border-white/5 rounded-xl py-3 px-4 text-sm text-[#a1a1aa] outline-none"
              value={cliente?.direccion || ''}
              placeholder="N/A"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#3f3f46] font-bold ml-1">DNI / CUIT</label>
            <input
              type="text"
              readOnly
              className="w-full bg-[#0a0a0b]/50 border border-white/5 rounded-xl py-3 px-4 text-sm text-[#a1a1aa] outline-none"
              value={cliente?.dni || ''}
              placeholder="N/A"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
