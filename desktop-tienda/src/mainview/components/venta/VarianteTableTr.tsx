import { Trash2 } from 'lucide-react';
import { useCarritoStore, VarianteCarrito } from '../../store/carrito.store';

interface Props {
  item: VarianteCarrito;
}

export const VarianteTableTr = ({ item }: Props) => {
  const { eliminarVarianteCarrito } = useCarritoStore();

  const subtotal = item.precio * item.cantidad;

  return (
    <tr className="group hover:bg-white/[0.02] transition-colors">
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[#f5f5f0] uppercase">{item?.producto}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 uppercase border border-white/5">
          {item?.variante}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className="text-sm font-medium text-zinc-300 tabular-nums">{item.cantidad}</span>
      </td>
      <td className="px-6 py-4 text-right">
        <span className="text-sm font-semibold text-[#f5f5f0] tabular-nums">
          ${item.precio.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <span className="text-sm font-bold text-[#d4af37] tabular-nums">
          ${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <button
          className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all border border-transparent hover:border-red-400/20 active:scale-95"
          onClick={() => eliminarVarianteCarrito(item.id_variante)}
          title="Eliminar del carrito"
        >
          <Trash2 size={18} />
        </button>
      </td>
    </tr>
  );
};
