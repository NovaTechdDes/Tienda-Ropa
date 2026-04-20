import { Trash2 } from 'lucide-react';
import { useCarritoStore, VarianteCarrito } from '../../store/carrito.store';

interface Props {
  item: VarianteCarrito;
}

export const VarianteTableTr = ({ item }: Props) => {
  const { eliminarVarianteCarrito } = useCarritoStore();

  const subtotal = item.precio * item.cantidad;

  return (
    <tr className="group hover:bg-[var(--primary-soft)] transition-colors border-b border-black/5 last:border-0">
      <td className="px-5 py-3">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[var(--atelier-parchment)] uppercase tracking-tight group-hover:text-[var(--primary)] transition-colors">{item?.producto}</span>
        </div>
      </td>
      <td className="px-5 py-3 text-center">
        <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[9px] font-black bg-[var(--atelier-ink)] text-[var(--secondary)] uppercase border border-black/10 shadow-sm">
          {item?.variante}
        </span>
      </td>
      <td className="px-5 py-3 text-center">
        <span className="text-xs font-bold text-[var(--atelier-parchment-muted)] tabular-nums">{item.cantidad}</span>
      </td>
      <td className="px-5 py-3 text-right">
        <span className="text-[11px] font-medium text-[var(--atelier-parchment)] tabular-nums">
          ${item.precio.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </span>
      </td>
      <td className="px-5 py-3 text-right">
        <span className="text-xs font-black text-[var(--tertiary)] tabular-nums">
          ${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </span>
      </td>
      <td className="px-5 py-3 text-center">
        <button
          className="p-2 text-[var(--atelier-parchment-low)] hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all border border-transparent hover:border-red-500/20 active:scale-95 shadow-sm hover:shadow-md"
          onClick={() => eliminarVarianteCarrito(item.id_variante)}
          title="Eliminar del carrito"
        >
          <Trash2 size={14} />
        </button>
      </td>
    </tr>
  );
};
