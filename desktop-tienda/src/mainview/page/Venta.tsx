import { Header } from '../components/ui/Header';
import { VentaCliente } from '../components/venta/VentaCliente';
import { VentaMetodoPago } from '../components/venta/VentaMetodoPago';
import { VentaProductos } from '../components/venta/VentaProductos';

const Venta = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] p-6 md:p-10 text-[#f5f5f0]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Header
          titulo="Ventas"
          descripcion="Generación de pedidos y gestión de facturación"
          accion={() => {}}
          textoBoton="Nueva Venta"
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
          {/* Columna Izquierda: Productos (Proximamente) */}
          <div className="xl:col-span-2 space-y-8">
            <VentaProductos />
          </div>

          {/* Columna Derecha: Cliente y Pago */}
          <div className="space-y-8">
            <VentaCliente />
            <VentaMetodoPago />
          </div>
        </div>

        {/* Carrito / Total (Proximamente) */}
      </div>
    </div>
  );
};

export default Venta;
