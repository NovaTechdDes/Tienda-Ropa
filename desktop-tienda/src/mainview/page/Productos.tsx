import { Search } from "lucide-react";
import { useProductoStore } from "../store";
import { Header, ProductoModalFormulario, ProductosList } from "../components";

export const Productos = () => {
  const { modal, openModal } = useProductoStore();

  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] p-6 md:p-10 text-[#f5f5f0]">
      <div className="max-w-[1600px] mx-auto">
        <Header
          titulo="Productos"
          descripcion="Gestión de catálogo, variantes y existencias"
          accion={openModal}
          textoBoton="Nuevo Producto"
        />

        {/* Buscador Premium */}
        <div className="mb-10 max-w-xl">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3f3f46] group-focus-within:text-[#d4af37] transition-colors duration-300" size={20} />
            <input
              type="text"
              placeholder="Buscar por código, nombre o categoría..."
              className="w-full bg-[#141416] border border-white/5 focus:border-[#d4af37]/40 rounded-2xl py-4 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* Lista de productos */}
        <div className="relative">
          <ProductosList />
        </div>

        {/* Modal Surface */}
        {modal && <ProductoModalFormulario />}
      </div>
    </div>
  );
};
