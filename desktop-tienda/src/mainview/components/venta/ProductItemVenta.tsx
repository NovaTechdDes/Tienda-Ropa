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
      className={`group h-56 relative bg-[var(--atelier-surface-1)] border border-black/60 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[var(--primary)]/50 hover:shadow-2xl ${producto.id === productoSeleccionado?.id ? 'border-[var(--primary)] border-2 ring-2 ring-[var(--primary)]/20' : ''}`}
    >
      <div className="absolute top-2 right-2 bg-[var(--tertiary)] text-[var(--neutral)] px-2 py-1 rounded-lg z-10 text-[10px] font-black leading-relaxed shadow-lg uppercase tracking-tighter">
        $ {producto.precio_global?.toFixed(2) ?? '0.00'}
      </div>
      {/* Image Container */}
      <div className="relative h-40 w-full overflow-hidden bg-[var(--atelier-ink)]">
        <img
          src={`${imgURL}${producto.img_url}`}
          alt={producto.descripcion}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--atelier-surface-1)] via-transparent to-transparent opacity-60" />
      </div>

      {/* Contenido Principal */}
      <div className="p-3 flex flex-col items-start bg-[var(--atelier-surface-1)]">
        <h3 className="text-[11px] font-bold tracking-tight text-[var(--atelier-parchment)] uppercase truncate w-full group-hover:text-[var(--primary)] transition-colors">{producto.descripcion}</h3>
        <p className="text-[9px] text-[var(--atelier-parchment-muted)] font-medium leading-relaxed line-clamp-1 opacity-60 mt-0.5">{producto.observacion || 'Sin descripción adicional'}</p>
      </div>
    </div>
  );
};
