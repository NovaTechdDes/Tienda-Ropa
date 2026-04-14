import { ShoppingBag } from 'lucide-react';
import { useCarritoStore } from '../../store';
import { VarianteTableTr } from './VarianteTableTr';

export const VariantesCarritos = () => {
  const { variantesCarrito } = useCarritoStore();

  return (
    <div className="bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-2xl overflow-hidden">
      <div className="p-3 border-b border-[var(--atelier-border)] flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-bold text-[var(--atelier-parchment)]">
          <div className="p-1.5 bg-[var(--atelier-gold)]/10 rounded-lg">
            <ShoppingBag className="text-[var(--atelier-gold)]" size={16} />
          </div>
          Carrito de Ventas
        </h3>
        <div className="flex items-center gap-2 px-3 py-1 bg-[var(--atelier-ink)] border border-[var(--atelier-border)] rounded-full">
          <span className="text-xs font-medium text-[var(--atelier-parchment-low)] uppercase tracking-wider">Items</span>
          <span className="text-sm font-bold text-[var(--atelier-gold)]">{variantesCarrito.length}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--atelier-ink)]/50">
              <th className="px-4 py-2 text-left text-[10px] font-semibold text-[var(--atelier-parchment-low)] uppercase tracking-widest">Producto</th>
              <th className="px-4 py-2 text-center text-[10px] font-semibold text-[var(--atelier-parchment-low)] uppercase tracking-widest">Variante</th>
              <th className="px-4 py-2 text-center text-[10px] font-semibold text-[var(--atelier-parchment-low)] uppercase tracking-widest">Cant.</th>
              <th className="px-4 py-2 text-right text-[10px] font-semibold text-[var(--atelier-parchment-low)] uppercase tracking-widest">Precio</th>
              <th className="px-4 py-2 text-right text-[10px] font-semibold text-[var(--atelier-parchment-low)] uppercase tracking-widest">Subtotal</th>
              <th className="px-4 py-2 text-center text-[10px] font-semibold text-[var(--atelier-parchment-low)] uppercase tracking-widest w-16">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--atelier-border-soft)]">
            {variantesCarrito.length > 0 ? (
              variantesCarrito.map((variante) => (
                <VarianteTableTr key={variante.id_variante} item={variante} />
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center gap-2 text-[var(--atelier-parchment-low)]">
                    <ShoppingBag size={40} className="opacity-20 mb-2" />
                    <p className="text-sm">El carrito está vacío</p>
                    <p className="text-xs opacity-60">Selecciona un producto y variante para comenzar</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
