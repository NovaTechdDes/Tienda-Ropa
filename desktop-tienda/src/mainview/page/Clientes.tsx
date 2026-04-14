import { Search } from 'lucide-react';
import { Header } from '../components';
import { useClientestore } from '../store';
import { ClientesList } from '../components/clientes/ClientesList';
import { ClienteModalFormulario } from '../components/clientes/ClienteModalFormulario';

export const Clientes = () => {
  const { modal, openModal, buscador, setBuscador } = useClientestore();

  return (
    <div className="min-h-screen w-full bg-[var(--atelier-ink)] p-6 md:p-10 text-[var(--atelier-parchment)]">
      <div className="max-w-[1600px] mx-auto">
        <Header titulo="Clientes" descripcion="Gestión de clientes y contactos preferenciales" textoBoton="Nuevo Cliente" accion={openModal} />

        {/* Buscador */}
        <div className="mb-10 max-w-xl">
          <div className="relative group">
            <div className="absolute inset-0 bg-[var(--atelier-gold)]/5 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-low)] group-focus-within:text-[var(--atelier-gold)] transition-colors duration-300" size={20} />
            <input
              type="text"
              value={buscador}
              onChange={(e) => setBuscador(e.target.value)}
              placeholder="Buscar por nombre, DNI o teléfono..."
              className="relative w-full bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] focus:border-[var(--atelier-gold)]/40 rounded-2xl py-4 pl-12 pr-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all duration-300 shadow-[var(--atelier-shadow-md)] placeholder:text-[var(--atelier-parchment-low)]"
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
