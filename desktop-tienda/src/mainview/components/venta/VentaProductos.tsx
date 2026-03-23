import { Loader2 } from 'lucide-react';
import { useProductos } from '../../hooks';
import { ProductItemVenta } from './ProductItemVenta';

export const VentaProductos = () => {
  const { data: productos, isLoading } = useProductos();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12 bg-[#141416] rounded-3xl border border-white/5">
        <Loader2 className="animate-spin text-[#d4af37]" />
      </div>
    );
  }

  return (
    <div className="bg-[#141416] border border-white/5 rounded-3xl p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
      {productos?.map((producto) => (
        <ProductItemVenta key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
