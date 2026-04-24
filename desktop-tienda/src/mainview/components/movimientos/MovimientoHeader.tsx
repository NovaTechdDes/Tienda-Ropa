import { ArrowRightLeft } from 'lucide-react';

export const MovimientoHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] shadow-inner">
          <ArrowRightLeft size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Movimiento de Variantes</h1>
          <p className="text-[var(--atelier-parchment-muted)] text-sm font-medium">Gestión centralizada de stock: Carga entradas y salidas de inventario</p>
        </div>
      </div>
    </div>
  );
};
