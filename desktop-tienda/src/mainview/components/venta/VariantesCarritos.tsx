import { ShoppingBag } from 'lucide-react';
import { useCarritoStore } from '../../store';
import { VarianteTableTr } from './VarianteTableTr';

export const VariantesCarritos = () => {
  const { variantesCarrito } = useCarritoStore();

  return (
    <div className="bg-[var(--atelier-surface-1)] border border-black/60 rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-black/10 flex items-center justify-between bg-black/5">
        <h3 className="flex items-center gap-2 text-sm font-bold text-[var(--atelier-parchment)] uppercase tracking-wider">
          <div className="p-2 bg-[var(--primary-soft)] rounded-xl">
            <ShoppingBag className="text-[var(--primary)]" size={18} />
          </div>
          Carrito de Venta
        </h3>
        <div className="flex items-center gap-3 px-4 py-1.5 bg-[var(--atelier-ink)] border border-black/20 rounded-full shadow-inner">
          <span className="text-[10px] font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">Items</span>
          <span className="text-sm font-black text-[var(--primary)]">{variantesCarrito.length}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-black/10">
              <th className="px-5 py-3 text-left text-[9px] font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">Producto</th>
              <th className="px-5 py-3 text-center text-[9px] font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">Variante</th>
              <th className="px-5 py-3 text-center text-[9px] font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">Cant.</th>
              <th className="px-5 py-3 text-right text-[9px] font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">Precio</th>
              <th className="px-5 py-3 text-right text-[9px] font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">Subtotal</th>
              <th className="px-5 py-3 text-center text-[9px] font-bold text-[var(--secondary)] uppercase tracking-[0.2em] w-20">Acciones</th>
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
