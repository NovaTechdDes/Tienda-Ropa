import { useProductos } from '../../hooks/productos/useProductos';
import { ProductItem } from './ProductItem';
import { useProductoStore } from '../../store';

export const ProductosList = () => {
  const { buscador } = useProductoStore();
  const { data: productos, isLoading } = useProductos(buscador);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
      {productos?.map((producto) => (
        <ProductItem key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
