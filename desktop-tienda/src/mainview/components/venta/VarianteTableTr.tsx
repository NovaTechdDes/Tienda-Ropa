import { Trash2 } from 'lucide-react';
import { useCarritoStore, VarianteCarrito } from '../../store/carrito.store';

interface Props {
  item: VarianteCarrito;
}

export const VarianteTableTr = ({ item }: Props) => {
  const { eliminarVarianteCarrito } = useCarritoStore();

  const subtotal = item.precio * item.cantidad;

  return (
    <tr className="group hover:bg-[var(--atelier-surface-2)]/50 transition-colors">
      <td className="px-4 py-2">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-[var(--atelier-parchment)] uppercase">{item?.producto}</span>
        </div>
      </td>
      <td className="px-4 py-2 text-center">
        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-[var(--atelier-ink)] text-[var(--atelier-parchment-low)] uppercase border border-[var(--atelier-border)]">
          {item?.variante}
        </span>
      </td>
      <td className="px-4 py-2 text-center">
        <span className="text-xs font-medium text-[var(--atelier-parchment-muted)] tabular-nums">{item.cantidad}</span>
      </td>
      <td className="px-4 py-2 text-right">
        <span className="text-xs font-semibold text-[var(--atelier-parchment)] tabular-nums">
          ${item.precio.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </span>
      </td>
      <td className="px-4 py-2 text-right">
        <span className="text-xs font-bold text-[var(--atelier-gold)] tabular-nums">
          ${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </span>
      </td>
      <td className="px-4 py-2 text-center">
        <button
          className="p-1 text-[var(--atelier-parchment-low)] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all border border-transparent hover:border-red-500/20 active:scale-95"
          onClick={() => eliminarVarianteCarrito(item.id_variante)}
          title="Eliminar del carrito"
        >
          <Trash2 size={14} />
        </button>
      </td>
    </tr>
  );
};
