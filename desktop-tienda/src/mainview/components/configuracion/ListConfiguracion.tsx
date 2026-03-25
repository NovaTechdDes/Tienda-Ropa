import { LayoutGrid, Plus } from "lucide-react";
import { ItemConfiguracion } from "./ItemConfiguracion";
import { Talle, Color, Categoria, Marca, Provedor } from "../../interface";

interface Props {
  type: string;
  data: Talle[] | Color[] | Categoria[] | Marca[] | Provedor[];
  actualizarType: any;
  eliminarType: any;
  valor: string;
  setValor: (value: string) => void;
  crearType: any;
}

export const ListConfiguracion = ({
  type,
  data,
  actualizarType,
  eliminarType,
  valor,
  setValor,
  crearType,
}: Props) => {
  const handleSubmit = () => {
    crearType.mutateAsync({ nombre: valor });
    setValor("");
  };

  return (
    <div className="bg-[#141416] border border-white/5 rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.4)] space-y-4">
      {/* Header Section */}
      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
        <div className="p-1.5 bg-[#d4af37]/10 rounded-lg border border-[#d4af37]/20">
          <LayoutGrid className="w-4 h-4 text-[#d4af37]" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#f5f5f0] tracking-widest uppercase">
            Gestión de {type}
          </h3>
          <p className="text-[#a1a1aa] text-[9px] font-medium uppercase tracking-tighter">
            Administrar {type} disponibles
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#0a0a0b]/50 border border-white/5 rounded-2xl p-4">
        <div className="flex flex-col sm:flex-row items-end gap-3">
          <div className="flex-1 w-full space-y-1.5">
            <label
              htmlFor={`nombre-${type}`}
              className="text-[9px] font-bold text-[#3f3f46] px-1 uppercase tracking-widest"
            >
              Nuevo {type}
            </label>
            <input
              type="text"
              placeholder={`Ej: ${type === 'Talle' ? 'S, M, L' : 'Rojo, Azul'}`}
              name={`nombre-${type}`}
              id={`nombre-${type}`}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="w-full bg-[#0a0a0b] text-[#f5f5f0] border border-white/5 rounded-xl p-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#d4af37]/50 transition-all placeholder:text-[#3f3f46]"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="h-[36px] px-4 bg-[#d4af37] hover:bg-[#b89630] text-[#0a0a0b] font-bold text-[10px] uppercase tracking-widest rounded-lg flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_15px_rgba(212,175,55,0.1)]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Agregar</span>
          </button>
        </div>
      </div>

      {/* List Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-[10px] font-bold text-[#3f3f46] uppercase tracking-[0.2em] flex items-center gap-2">
            {type} Existentes
            <span className="bg-[#d4af37]/10 text-[#d4af37] text-[9px] py-0.5 px-2 rounded-full border border-[#d4af37]/20">
              {data?.length || 0}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {data?.map((elem) => (
            <ItemConfiguracion
              key={elem.id}
              elem={elem}
              actualizarType={actualizarType}
              eliminarType={eliminarType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
