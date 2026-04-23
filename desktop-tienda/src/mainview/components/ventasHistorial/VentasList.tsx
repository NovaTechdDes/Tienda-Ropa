import { VentaItem } from './VentaItem';
import { useVentas } from '../../hooks/ventas/useVentas';
import { useVentaStore } from '../../store/venta.store';

export const VentasList = () => {
  const { desde, hasta, ventaBuscador } = useVentaStore();
  const { data: ventas, isLoading, error } = useVentas(desde, hasta, 'CONTADO', ventaBuscador);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar las ventas</div>;
  }

  return (
    <div className="w-full bg-[var(--atelier-surface-1)] border border-black/50 rounded-3xl overflow-hidden shadow-[var(--atelier-shadow-md)]">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[var(--atelier-surface-2)] text-[10px] uppercase tracking-[0.2em] text-[var(--atelier-parchment-muted)] font-bold">
              <th className="px-6 py-4 border-b border-[var(--atelier-border-soft)]">Fecha</th>
              <th className="px-6 py-4 border-b border-[var(--atelier-border-soft)]">Cliente</th>
              <th className="px-6 py-4 border-b border-[var(--atelier-border-soft)]">Tipo / Pago</th>
              <th className="px-6 py-4 border-b border-[var(--atelier-border-soft)] text-right">Subtotal</th>
              <th className="px-6 py-4 border-b border-[var(--atelier-border-soft)] text-right">Descuento</th>
              <th className="px-6 py-4 border-b border-[var(--atelier-border-soft)] text-right">Total</th>
              <th className="px-6 py-4 border-b border-[var(--atelier-border-soft)] text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--atelier-border-soft)]/50">
            {ventas && ventas.length > 0 ? (
              ventas.map((venta, index) => <VentaItem key={index} venta={venta} />)
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-[var(--atelier-parchment-muted)] italic">
                  No se encontraron ventas con los filtros seleccionados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
