import { Search, Calendar, Receipt } from 'lucide-react';
import { useVentaStore } from '../../store/venta.store';
import { useVentas } from '../../hooks/ventas/useVentas';

export const HistorialHeader = () => {
  const { desde, hasta, ventaBuscador, setDesde, setHasta, setVentaBuscador } = useVentaStore();
  const { data: ventas } = useVentas(desde, hasta, 'CONTADO', ventaBuscador);

  return (
    <header className="flex flex-col space-y-6 mb-8">
      <div className="flex justify-between">
        {/* Titulo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--primary)] mb-1 flex items-center gap-3">
              <Receipt size={32} className="text-[var(--atelier-gold)]" />
              Historial de Ventas
            </h1>
            <p className="text-[var(--atelier-parchment-muted)] text-sm font-medium">Consulta y filtra el registro histórico de todas las ventas realizadas.</p>
          </div>
        </div>

        {/* Total de ventas */}
        <div className="h-full flex flex-col justify-end">
          <h3 className="text-xl font-bold tracking-tight text-[var(--primary)] mb-1 text-right">Total de ventas:</h3>
          <p className="font-medium text-right text-3xl text-[var(--atelier-gold)]">${ventas?.reduce((acc, venta) => acc + venta.total, 0).toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-[var(--atelier-surface-1)] border border-black/50 rounded-2xl shadow-[var(--atelier-shadow-sm)]">
        {/* Filtro Desde */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold ml-1 flex items-center gap-2">
            <Calendar size={12} />
            Desde
          </label>
          <div className="relative group">
            <input
              type="date"
              value={desde}
              onChange={(e) => setDesde(e.target.value)}
              className="w-full bg-[var(--atelier-ink)] border border-black/50 focus:border-[var(--atelier-gold)]/30 rounded-xl py-2.5 px-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all appearance-none"
            />
          </div>
        </div>

        {/* Filtro Hasta */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold ml-1 flex items-center gap-2">
            <Calendar size={12} />
            Hasta
          </label>
          <div className="relative group">
            <input
              type="date"
              value={hasta}
              onChange={(e) => setHasta(e.target.value)}
              className="w-full bg-[var(--atelier-ink)] border border-black/50 focus:border-[var(--atelier-gold)]/30 rounded-xl py-2.5 px-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all appearance-none"
            />
          </div>
        </div>

        {/* Buscador por Número */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold ml-1 flex items-center gap-2">
            <Search size={12} />
            Buscar por número / cliente
          </label>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-muted)] group-focus-within:text-[var(--atelier-gold)] transition-colors" size={16} />
            <input
              type="text"
              placeholder="Ej: 1025 / Juan Perez"
              value={ventaBuscador}
              onChange={(e) => setVentaBuscador(e.target.value)}
              className="w-full bg-[var(--atelier-ink)] border border-black/50 focus:border-[var(--atelier-gold)]/30 rounded-xl py-2.5 pl-12 pr-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
