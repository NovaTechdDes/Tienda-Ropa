import { Search } from 'lucide-react';
import { useProductoStore } from '../store';
import { Header, ProductoModalFormulario, ProductosList } from '../components';

export const Productos = () => {
  const { modal, openModal, buscador, setBuscador } = useProductoStore();

  return (
    <div className="min-h-screen w-full bg-[var(--atelier-ink)] p-6 md:p-10 text-[var(--atelier-parchment)] transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto">
        <Header titulo="Productos" descripcion="Gestión de catálogo, variantes y existencias" accion={openModal} textoBoton="Nuevo Producto" />

        {/* Buscador */}
        <div className="mb-10 max-w-xl">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-low)] group-focus-within:text-[var(--atelier-gold)] transition-colors duration-300" size={20} />
            <input
              type="text"
              value={buscador}
              onChange={(e) => setBuscador(e.target.value)}
              placeholder="Buscar por código, nombre o categoría..."
              className="w-full bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] focus:border-[var(--atelier-gold)]/40 rounded-2xl py-4 pl-12 pr-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all duration-300 shadow-[var(--atelier-shadow-md)] placeholder:text-[var(--atelier-parchment-muted)]"
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
