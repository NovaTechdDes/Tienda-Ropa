import { Loader2 } from 'lucide-react';
import { useProductos } from '../../hooks';
import { ProductItemVenta } from './ProductItemVenta';
import { useProductoStore } from '../../store';

export const VentaProductos = () => {
  const { buscador } = useProductoStore();
  const { data: productos, isLoading } = useProductos(buscador);
  console.log(productos);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12 bg-[#141416] rounded-3xl border border-white/5">
        <Loader2 className="animate-spin text-[#d4af37]" />
      </div>
    );
  }

  return (
    <div className="bg-[#141416] border border-white/5 rounded-3xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4af37]/20 scrollbar-track-transparent content-start">
      {productos?.map((producto) => (
        <ProductItemVenta key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
