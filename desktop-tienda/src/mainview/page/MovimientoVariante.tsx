import { useState } from 'react';
import { MovimientoHeader } from '../components/movimientos/movimientoHeader';
import { ListaVariantesMovimientos } from '../components/movimientos/ListaVariantesMovimientos';
import { FormularioMovimientoVariante } from '../components/movimientos/FormularioMovimientoVariante';
import { useVariantes } from '../hooks/variantes/useVariantes';

export const MovimientoVariante = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: variantes, isLoading } = useVariantes(searchQuery);

  return (
    <div className="p-8 min-h-full flex flex-col gap-8 animate-fade-in bg-[var(--atelier-ink)] text-[var(--atelier-parchment)]">
      <MovimientoHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Search & Selection */}

        <ListaVariantesMovimientos searchQuery={searchQuery} setSearchQuery={setSearchQuery} variantes={variantes ?? []} isLoading={isLoading} />

        {/* Right Column: Movement Form */}
        <FormularioMovimientoVariante />
      </div>
    </div>
  );
};
