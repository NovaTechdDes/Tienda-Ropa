import { Producto } from '../../interface/Producto';
import { useCarritoStore } from '../../store';

interface Props {
  producto: Producto;
}

const imgURL = import.meta.env.VITE_URL || 'http://localhost:3000';

export const ProductItemVenta = ({ producto }: Props) => {
  const { setProductoSeleccionado, productoSeleccionado } = useCarritoStore();

  return (
    <div
      key={producto.id}
      onClick={() => setProductoSeleccionado(producto)}
      className={`group h-56 relative bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[var(--atelier-gold)]/30 hover:shadow-[var(--atelier-shadow-md)] ${producto.id === productoSeleccionado?.id ? 'border-[var(--atelier-gold)] border-3' : ''}`}
    >
      <p className="absolute top-2 right-2 bg-white text-[#D4af37] p-1 rounded-lg z-10 text-xs font-bold leading-relaxed shadow-lg">$ {producto.precio_global?.toFixed(2) ?? '0.00'}</p>
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[var(--atelier-ink)]">
        <img
          src={`${imgURL}${producto.img_url}`}
          alt={producto.descripcion}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--atelier-surface-1)] via-transparent to-transparent opacity-60" />
      </div>

      {/* Contenido Principal */}
      <div className="p-5 flex flex-col items-start">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="text-sm font-bold tracking-tight text-[var(--atelier-parchment)] uppercase truncate">{producto.descripcion}</h3>
        </div>

        <p className="text-xs text-[var(--atelier-parchment-muted)] font-medium leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">{producto.observacion || 'Sin descripción adicional'}</p>
      </div>
    </div>
  );
};
