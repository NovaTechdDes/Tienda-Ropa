import { Loader2, Search } from 'lucide-react';
import { useProductos } from '../../hooks';
import { ProductItemVenta } from './ProductItemVenta';
import { useProductoStore } from '../../store';

export const VentaProductos = () => {
  const { buscador, setBuscador } = useProductoStore();
  const { data: productos, isLoading } = useProductos(buscador);

  return (
      <div className='flex flex-col bg-[#141416] border border-white/5 rounded-3xl p-2'>
        <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3f3f46] group-focus-within:text-[#d4af37] transition-colors duration-300" size={20} />
            <input
              type="text"
              value={buscador}
              onChange={(e) => setBuscador(e.target.value)}
              placeholder="Buscar por código, nombre o categoría..."
              className="w-full bg-[#141416] border border-white/5 focus:border-[#d4af37]/40 rounded-2xl py-4 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] placeholder:text-gray-600"
            />
          </div>
      { 
      isLoading 
        ? (
          <div className='flex mt-2 items-center justify-center p-12 bg-[#141416] rounded-3xl border border-white/5'>
            <Loader2 className="animate-spin text-[#d4af37]" />
          </div>
        ) :

        <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4af37]/20 scrollbar-track-transparent content-start">
          {productos?.map((producto) => (
            <ProductItemVenta key={producto.id} producto={producto} />
          ))}
        </div>
      }
      </div>
  );
};
