import { Header } from "../components/ui/Header";

const Venta = () => {
  return (
    <div className="h-screen w-full bg-white">
      {/* Header */}
      <Header
        titulo="Ventas"
        descripcion="Gestiona tus ventas de bikinis y ropa"
        accion={() => {}}
        textoBoton="Nueva Venta"
      />

      {/* Modal */}
    </div>
  );
};

export default Venta;
