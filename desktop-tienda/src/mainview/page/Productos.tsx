import { Search } from "lucide-react";
import { useProductoStore } from "../store";
import { Header, ProductoModalFormulario, ProductosList } from "../components";

export const Productos = () => {
  const { modal } = useProductoStore();

  return (
    <div className="h-screen w-full bg-white p-10">
      <Header
        titulo="Productos"
        descripcion="Gestiona tus productos de bikinis y ropa"
        accion={() => {}}
        textoBoton="Nuevo Producto"
      />

      {/* Buscador */}
      <div className="flex mt-5 border border-gray-300 rounded-md p-2 w-1/2 items-center">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Buscar productos por codigo o nombre"
          className="w-full border-none outline-none p-2 text-black"
        />
      </div>

      {/* lista de productos */}

      <ProductosList />

      {/* Modal */}
      {!modal && <ProductoModalFormulario />}
    </div>
  );
};
