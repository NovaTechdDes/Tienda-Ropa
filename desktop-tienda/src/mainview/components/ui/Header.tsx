import { Plus } from "lucide-react";

interface Props {
  titulo: string;
  descripcion: string;
  accion: () => void;
  textoBoton: string;
}

export const Header = ({ titulo, descripcion, accion, textoBoton }: Props) => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-black">{titulo}</h1>
        <span className="text-gray-500">{descripcion}</span>
      </div>

      <button
        onClick={accion}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex gap-2 items-center"
      >
        <Plus />
        {textoBoton}
      </button>
    </header>
  );
};
