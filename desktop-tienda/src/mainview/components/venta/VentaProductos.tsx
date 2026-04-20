import { Loader2, Search } from 'lucide-react';
import { useProductos } from '../../hooks';
import { ProductItemVenta } from './ProductItemVenta';
import { useProductoStore } from '../../store';

export const VentaProductos = () => {
  const { buscador, setBuscador } = useProductoStore();
  const { data: productos, isLoading } = useProductos(buscador);

  return (
      <div className='flex flex-col bg-[var(--atelier-surface-1)] border border-black/60 rounded-3xl p-2 shadow-lg'>
        <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-low)] group-focus-within:text-[var(--primary)] transition-colors duration-300" size={20} />
            <input
              type="text"
              value={buscador}
              onChange={(e) => setBuscador(e.target.value)}
              placeholder="Buscar por código, nombre o categoría..."
              className="w-full bg-[var(--atelier-ink)] border border-black/20 focus:border-[var(--primary)]/40 rounded-2xl py-4 pl-12 pr-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all duration-300 shadow-inner placeholder:text-[var(--atelier-parchment-low)]"
            />
          </div>
      { 
      isLoading 
        ? (
          <div className='flex mt-2 items-center justify-center p-12 bg-[var(--atelier-surface-1)] rounded-3xl border border-black/60'>
            <Loader2 className="animate-spin text-[var(--primary)]" />
          </div>
        ) :
 
        <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--primary)]/20 scrollbar-track-transparent content-start">
          {productos?.map((producto) => (
            <ProductItemVenta key={producto.id} producto={producto} />
          ))}
        </div>
      }
      </div>
  );
};
