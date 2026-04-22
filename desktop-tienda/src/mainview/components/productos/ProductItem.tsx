import { Pencil, Trash2, Layers, Box } from 'lucide-react';
import { Producto } from '../../interface/Producto';
import Swal from 'sweetalert2';
import { useMutateProducto } from '../../hooks';
import { useProductoStore } from '../../store';

interface Props {
  producto: Producto;
}

const imgURL = import.meta.env.VITE_URL || 'http://localhost:3000';

console.log(import.meta.env);

export const ProductItem = ({ producto }: Props) => {
  const { setProductoSeleccionado, openModal } = useProductoStore();
  const { eliminarProducto } = useMutateProducto();

  const totalStock = producto.variantes?.reduce((acc, v) => acc + v.stock, 0) || 0;
  const variantsCount = producto.variantes?.length || 0;

  const handleDelete = async () => {
    const { isConfirmed } = await Swal.fire({
      title: 'Seguro quiere eliminar el producto?',
      text: 'No se podra revertir la accion',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (isConfirmed) {
      eliminarProducto.mutateAsync(producto.id);
    }
  };

  const handleUpdate = async () => {
    setProductoSeleccionado(producto);
    openModal();
  };

  return (
    <div
      key={producto.id}
      className="group relative bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[var(--atelier-gold)]/30 hover:shadow-[var(--atelier-shadow-md)]"
    >
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[var(--atelier-ink)]">
        <img
          src={`${imgURL}${producto.img_url}`}
          alt={producto.descripcion}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--atelier-surface-1)] via-transparent to-transparent opacity-60" />
        <p className="absolute top-2 right-2 bg-white text-[var(--atelier-gold)] p-1.5 rounded-lg z-10 text-xs font-bold leading-relaxed shadow-lg">$ {producto.precio_global?.toFixed(2) ?? '0.00'}</p>
      </div>

      {/* Contenido Principal */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="text-sm font-bold tracking-tight text-[var(--atelier-parchment)] uppercase truncate">{producto.descripcion}</h3>
        </div>

        <p className="text-xs text-[var(--atelier-parchment-muted)] font-medium leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4 capitalize">{producto.observacion || 'Sin descripción adicional'}</p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)]">
            <Layers size={14} className="text-[var(--atelier-parchment-low)]" />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-[var(--atelier-parchment-low)] font-bold leading-none mb-1">Variantes</span>
              <span className="text-xs text-[var(--atelier-parchment)] font-bold leading-none">{variantsCount}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)]">
            <Box size={14} className="text-[var(--atelier-parchment-low)]" />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-[var(--atelier-parchment-low)] font-bold leading-none mb-1">Total Items</span>
              <span className="text-xs text-[var(--atelier-parchment)] font-bold leading-none">{totalStock.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleUpdate}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--atelier-parchment)] rounded-xl transition-all duration-300 border border-[var(--atelier-border-soft)] hover:border-[var(--atelier-border)] group/btn"
          >
            <Pencil size={14} className="transition-transform group-hover/btn:-translate-y-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-widest">Editar</span>
          </button>

          <button
            disabled={eliminarProducto.isPending}
            onClick={handleDelete}
            className={`flex items-center justify-center w-11 h-11 ${eliminarProducto.isPending ? 'bg-gray-500/5 hover:bg-gray-500/10 text-gray-400 rounded-xl transition-all duration-300 border border-gray-500/10 hover:border-gray-500/20 group/del' : 'bg-red-500/5 hover:bg-red-500/10 text-red-400 rounded-xl transition-all duration-300 border border-red-500/10 hover:border-red-500/20 group/del'}`}
          >
            <Trash2 size={16} className="transition-transform group-hover/del:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};
