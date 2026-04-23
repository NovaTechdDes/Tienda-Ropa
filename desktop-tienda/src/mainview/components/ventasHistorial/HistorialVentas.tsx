import { HistorialHeader } from './HistorialHeader';
import { VentasList } from './VentasList';

export const HistorialVentas = () => {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <HistorialHeader />

      <div className="mt-8">
        <VentasList />
      </div>
    </div>
  );
};
