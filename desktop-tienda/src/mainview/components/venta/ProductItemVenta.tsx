import { Producto } from '../../interface/Producto';
import { useCarritoStore } from '../../store';

interface Props {
  producto: Producto;
}

const imgURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const ProductItemVenta = ({ producto }: Props) => {
  const { setProductoSeleccionado } = useCarritoStore();

  return (
    <div
      key={producto.id}
      onClick={() => setProductoSeleccionado(producto)}
      className="group relative bg-[#141416] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#d4af37]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
    >
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[#0a0a0b]">
        <img
          src={`${imgURL}${producto.img_url}`}
          alt={producto.descripcion}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-60" />
      </div>

      {/* Contenido Principal */}
      <div className="p-5 flex flex-col items-start">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="text-sm font-bold tracking-tight text-[#f5f5f0] uppercase truncate">{producto.descripcion}</h3>
        </div>

        <p className="text-xs text-[#a1a1aa] font-medium leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">{producto.observacion || 'Sin descripción adicional'}</p>
      </div>
    </div>
  );
};
