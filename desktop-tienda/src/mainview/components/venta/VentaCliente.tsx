import { ArrowBigDown, ArrowBigUp, Loader2, User } from 'lucide-react';
import { useClientes } from '../../hooks';
import { useCarritoStore } from '../../store';
import { Cliente } from '../../interface/Cliente';
import { useEffect, useState } from 'react';

export const VentaCliente = () => {
  const { cliente, setCliente, clearCliente } = useCarritoStore();
  const { data: clientes, isLoading } = useClientes();

  const [clienteAux, setClienteAux] = useState<Partial<Cliente> | null>(cliente ?? null);
  const [mostrarDatos, setMostrarDatos] = useState(false);

  const handleClienteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cliente = clientes?.find((cliente: Cliente) => cliente.id === Number(e.target.value));
    if (cliente) {
      setCliente(cliente);
    } else {
      clearCliente();
    }
  };

  useEffect(() => {
    const cliente = clientes?.find((cliente: Cliente) => cliente.id === 1);
    console.log(cliente);
    if (cliente) {
      setCliente(cliente);
    }
  }, [clientes]);

  useEffect(() => {
    setClienteAux(cliente ?? null);
  }, [cliente]);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12 bg-[var(--atelier-surface-1)] rounded-3xl border border-black/60">
        <Loader2 className="animate-spin text-[var(--primary)]" />
      </div>
    );
  }

  return (
    <div className="bg-[var(--atelier-surface-1)] border border-black/60 rounded-3xl p-5 shadow-2xl">
      <div className="flex items-center justify-between gap-3 mb-5 pb-2 border-b border-black/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[var(--primary-soft)] flex items-center justify-center">
            <User className="text-[var(--primary)]" size={18} />
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.1em] text-[var(--atelier-parchment)]">Cliente</h3>
            <p className="text-[9px] text-[var(--secondary)] font-bold uppercase tracking-widest">Información de Venta</p>
          </div>
        </div>
        <div className="cursor-pointer p-1.5 hover:bg-black/10 rounded-lg transition-colors" onClick={() => setMostrarDatos(!mostrarDatos)}>
          {mostrarDatos ? <ArrowBigUp className="text-[var(--primary)]" size={20} /> : <ArrowBigDown className="text-[var(--primary)]" size={20} />}
        </div>
      </div>
 
      <div className="space-y-6">
        {/* Selector de Cliente */}
        <div className="space-y-2">
          <label className="text-[9px] uppercase tracking-[0.2em] text-[var(--secondary)] font-black ml-1">Buscar Cliente</label>
          <div className="relative group">
            <select
              name="cliente"
              id="cliente"
              value={cliente?.id || ''}
              className="w-full bg-[var(--atelier-ink)] border border-black/20 focus:border-[var(--primary)]/30 rounded-xl py-3.5 px-4 text-xs text-[var(--atelier-parchment)] outline-none transition-all appearance-none cursor-pointer shadow-inner"
              onChange={handleClienteChange}
            >
              <option value="">Seleccionar cliente</option>
              {clientes?.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nombre}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--primary)]/50 group-hover:text-[var(--primary)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
 
        {/* Detalle del Cliente */}
        {mostrarDatos && (
          <div className="grid grid-cols-1 gap-4 pt-4 border-t border-black/10 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[var(--secondary)] font-bold ml-1">Nombre</label>
              <input
                type="text"
                className="w-full bg-[var(--atelier-ink)] border border-black/10 rounded-xl py-2.5 px-4 text-xs text-[var(--atelier-parchment-muted)] outline-none focus:border-[var(--primary)]/20 transition-all opacity-80"
                value={clienteAux?.nombre || ''}
                readOnly
                placeholder="N/A"
              />
            </div>
 
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[var(--secondary)] font-bold ml-1">Teléfono</label>
              <input
                type="text"
                className="w-full bg-[var(--atelier-ink)] border border-black/10 rounded-xl py-2.5 px-4 text-xs text-[var(--atelier-parchment-muted)] outline-none focus:border-[var(--primary)]/20 transition-all opacity-80"
                value={clienteAux?.telefono || ''}
                readOnly
                placeholder="N/A"
              />
            </div>
 
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[var(--secondary)] font-bold ml-1">Dirección</label>
              <input
                type="text"
                className="w-full bg-[var(--atelier-ink)] border border-black/10 rounded-xl py-2.5 px-4 text-xs text-[var(--atelier-parchment-muted)] outline-none focus:border-[var(--primary)]/20 transition-all opacity-80"
                value={clienteAux?.direccion || ''}
                readOnly
                placeholder="N/A"
              />
            </div>
 
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[var(--secondary)] font-bold ml-1">DNI / CUIT</label>
              <input
                type="text"
                className="w-full bg-[var(--atelier-ink)] border border-black/10 rounded-xl py-2.5 px-4 text-xs text-[var(--atelier-parchment-muted)] outline-none focus:border-[var(--primary)]/20 transition-all opacity-80"
                value={clienteAux?.dni || ''}
                readOnly
                placeholder="N/A"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
