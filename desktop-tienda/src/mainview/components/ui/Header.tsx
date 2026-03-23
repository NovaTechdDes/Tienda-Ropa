import { Plus } from "lucide-react";

interface Props {
  titulo: string;
  descripcion: string;
  accion: () => void;
  textoBoton: string;
}

export const Header = ({ titulo, descripcion, accion, textoBoton }: Props) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#f5f5f0] mb-1">
          {titulo}
        </h1>
        <p className="text-[#a1a1aa] text-sm font-medium">
          {descripcion}
        </p>
      </div>

      <button
        onClick={accion}
        className="group relative px-6 py-3 bg-[#d4af37] hover:bg-[#e5c158] text-[#0a0a0b] font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_24px_-4px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
      >
        <Plus size={18} className="transition-transform group-hover:rotate-90" />
        {textoBoton}
      </button>
    </header>
  );
};
