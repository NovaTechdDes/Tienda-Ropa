import { Trash } from "lucide-react";
import { Variante_Producto } from "../../interface/Variante_Producto";
import { Color, Talle } from "../../interface";

interface Props {
  elem: Variante_Producto;
  index: number;
  talles: Talle[];
  colores: Color[];
  onDelete: () => void;
}
export const VarianteItemFormulario = ({
  elem,
  index,
  talles,
  colores,
  onDelete,
}: Props) => {
  const nombreTalle =
    talles.find((t) => t.id === elem.talle_id)?.nombre || elem.talle_id;

  const nombreColor =
    colores.find((c) => c.id === elem.color_id)?.nombre || elem.color_id;

  return (
    <tr key={index} className="items-center">
      <td className="px-5 py-4 text-xs text-[#f5f5f0]">{nombreTalle}</td>
      <td className="px-5 py-4 text-xs text-[#f5f5f0] capitalize">
        {nombreColor}
      </td>
      <td className="px-5 py-4 text-xs text-[#f5f5f0]">
        {elem.stock.toFixed(0)}
      </td>
      <td className="px-5 py-4 text-xs text-[#f5f5f0] font-medium">
        ${elem.precio.toFixed(2)}
      </td>
      <td className="px-5 py-4 text-right">
        <button
          onClick={onDelete}
          type="button"
          className="p-2 hover:bg-red-500/10 rounded-lg transition-colors group"
        >
          <Trash
            size={16}
            className="text-red-500/60 group-hover:text-red-500"
          />
        </button>
      </td>
    </tr>
  );
};
