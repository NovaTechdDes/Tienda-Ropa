import { Search } from 'lucide-react';
import { Header } from '../components';
import { useClientestore } from '../store';
import { ClientesList } from '../components/clientes/ClientesList';
import { ClienteModalFormulario } from '../components/clientes/ClienteModalFormulario';

export const Clientes = () => {
  const { modal, openModal, buscador, setBuscador } = useClientestore();

  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] p-6 md:p-10 text-[#f5f5f0]">
      <div className="max-w-[1600px] mx-auto">
        <Header titulo="Clientes" descripcion="Gestión de clientes y contactos preferenciales" textoBoton="Nuevo Cliente" accion={openModal} />

        {/* Buscador */}
        <div className="mb-10 max-w-xl">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#d4af37]/5 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3f3f46] group-focus-within:text-[#d4af37] transition-colors duration-300" size={20} />
            <input
              type="text"
              value={buscador}
              onChange={(e) => setBuscador(e.target.value)}
              placeholder="Buscar por nombre, DNI o teléfono..."
              className="relative w-full bg-[#141416] border border-white/5 focus:border-[#d4af37]/40 rounded-2xl py-4 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] placeholder:text-[#3f3f46]"
            />
          </div>
        </div>

        {/* Lista de Clientes */}
        <div className="relative">
          <ClientesList />
        </div>
      </div>

      {modal && <ClienteModalFormulario />}
    </div>
  );
};
