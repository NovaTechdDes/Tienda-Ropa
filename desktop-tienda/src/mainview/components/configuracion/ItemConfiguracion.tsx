import { Color } from "../../interface/Color";
import { Marca } from "../../interface/Marca";
import { Talle } from "../../interface/Talle";
import { Edit3, Trash } from "lucide-react";
import { mensaje } from "../../utils/mensaje";
import Swal from "sweetalert2";

interface Props {
  elem: Talle | Color | Marca;
  actualizarType: any;
  eliminarType: any;
}

export const ItemConfiguracion = ({
  elem,
  actualizarType,
  eliminarType,
}: Props) => {
  const handleDelete = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (isConfirmed) {
      const res = await eliminarType.mutateAsync(elem?.id);

      if (res) {
        mensaje("Eliminado correctamente", "success");
      } else {
        mensaje("Error al eliminar", "error");
      }
    }
  };

  const handleUpdate = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: "Editar",
      input: "text",
      inputValue: elem.nombre,
      showCancelButton: true,
      confirmButtonText: "Actualizar",
      cancelButtonText: "Cancelar",
    });

    if (isConfirmed) {
      const res = await actualizarType.mutateAsync({
        id: elem.id,
        nombre: value,
      });

      if (res) {
        mensaje("Actualizado correctamente", "success");
      } else {
        mensaje("Error al actualizar", "error");
      }
    }
  };

  return (
    <div
      key={elem.id}
      className="group relative bg-[#0a0a0b] border border-white/5 rounded-2xl p-3 flex flex-col gap-3 shadow-md hover:shadow-xl hover:border-[#d4af37]/20 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center justify-between relative z-10">
        <div className="flex flex-col">
          <p className="text-[#f5f5f0] text-sm font-bold leading-tight group-hover:text-[#d4af37] transition-colors uppercase truncate">
            {elem.nombre}
          </p>
        </div>
      </div>

      <div className="flex gap-2 relative z-10 mt-1">
        <button
          onClick={handleUpdate}
          className="flex-1 bg-white/5 hover:bg-[#d4af37] hover:text-[#0a0a0b] text-[#a1a1aa] border border-white/5 rounded-lg py-1.5 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Editar</span>
        </button>
        <button
          onClick={handleDelete}
          className="aspect-square bg-white/5 hover:bg-red-500/10 hover:text-red-500 text-[#3f3f46] border border-white/5 rounded-lg px-2 flex items-center justify-center transition-all duration-200 active:scale-95"
          title="Eliminar"
        >
          <Trash className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
