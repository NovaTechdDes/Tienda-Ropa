import { Search } from 'lucide-react';
import { Producto } from '../../interface/Producto';
import { VarianteItemMovimiento } from './VarianteItemMovimiento';
import { Loading } from '../ui/Loading';

interface Props {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  variantes: Producto[];
  isLoading: boolean;
}

export const ListaVariantesMovimientos = ({ searchQuery, setSearchQuery, variantes, isLoading }: Props) => {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      <div className="bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-3xl p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[var(--atelier-ink)] flex items-center justify-center border border-[var(--atelier-border)]">
            <Search size={18} className="text-[var(--primary)]" />
          </div>
          <h2 className="text-lg font-semibold">Buscar Variante</h2>
        </div>

        <div className="relative group mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-low)] group-focus-within:text-[var(--primary)] transition-colors" size={18} />
          <input
            type="text"
            placeholder="SKU o nombre del producto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[var(--atelier-ink)] border border-[var(--atelier-border)] focus:border-[var(--primary)]/40 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none transition-all shadow-inner"
          />
        </div>

        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold mb-2 ml-1">Resultados {isLoading ? '...' : variantes.length}</p>
          {isLoading ? (
            <Loading text="Cargando variantes" />
          ) : !variantes ? (
            <div>
              <p className="text-center text-[var(--atelier-parchment-muted)]">No se obtuvieron variantes</p>
            </div>
          ) : (
            variantes?.map((v) => <VarianteItemMovimiento key={v.id} v={v} />)
          )}
        </div>
      </div>
    </div>
  );
};
