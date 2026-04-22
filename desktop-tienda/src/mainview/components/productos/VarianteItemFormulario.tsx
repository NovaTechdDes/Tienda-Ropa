import { Trash } from 'lucide-react';
import { Variante_Producto } from '../../interface/Variante_Producto';
import { Color, Talle } from '../../interface';

interface Props {
  elem: Variante_Producto;
  index: number;
  talles: Talle[];
  colores: Color[];
  onDelete: () => void;
}
export const VarianteItemFormulario = ({ elem, index, talles, colores, onDelete }: Props) => {
  const nombreTalle = talles.find((t) => t.id === elem.talle_id)?.nombre || elem.talle_id;

  const nombreColor = colores.find((c) => c.id === elem.color_id)?.nombre || elem.color_id;

  return (
    <tr key={index} className="group hover:bg-[var(--atelier-surface-2)]/50 transition-colors duration-300">
      <td className="px-5 py-4 text-xs text-[var(--atelier-parchment)] font-medium">{nombreTalle}</td>
      <td className="px-5 py-4 text-xs text-[var(--atelier-parchment)] capitalize font-medium">{nombreColor}</td>
      <td className="px-5 py-4 text-xs text-[var(--atelier-parchment)] font-bold">{elem.stock.toFixed(0)}</td>
      <td className="px-5 py-4 text-xs text-[var(--secondary)] font-bold">${elem.precio.toFixed(2)}</td>
      <td className="px-5 py-4 text-xs font-bold text-[var(--atelier-parchment)]">{elem.sku}</td>
      <td className="px-5 py-4 text-right">
        <button onClick={onDelete} type="button" className="p-2.5 bg-red-500/5 hover:bg-red-500/10 rounded-xl transition-all duration-300 group/del">
          <Trash size={16} className="text-red-500/40 group-hover/del:text-red-500 transition-colors" />
        </button>
      </td>
    </tr>
  );
};
