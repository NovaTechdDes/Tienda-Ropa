import { useCarritoStore } from '../../store';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export const ProductoSeleccionado = () => {
  const { productoSeleccionado, addItemCarrito } = useCarritoStore();
  const [varianteSeleccionado, setVarianteSeleccionado] = useState('');
  const [cantidad, setCantidad] = useState(1);

  const handleAddVariantes = () => {
    if (!productoSeleccionado) return;
    if (!varianteSeleccionado) return;

    addItemCarrito(varianteSeleccionado, cantidad, productoSeleccionado?.precio_global ?? 0);
    setCantidad(1);
    setVarianteSeleccionado('');
  };

  if (!productoSeleccionado) return null;

  return (
    <div className="bg-[var(--atelier-surface-1)] border border-black/60 rounded-2xl p-4 shadow-xl">
      <div className="mb-4 border-b border-black/10 pb-2">
        <h3 className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">{productoSeleccionado?.descripcion}</h3>
      </div>
 
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex flex-col flex-1 min-w-[150px]">
          <label htmlFor="variante" className="text-[9px] uppercase font-bold text-[var(--secondary)] tracking-widest ml-1 mb-1.5">
            Variante
          </label>
          <select
            name="variante"
            id="variante"
            value={varianteSeleccionado}
            onChange={(e) => setVarianteSeleccionado(e.target.value)}
            className="bg-[var(--atelier-ink)] border border-black/20 focus:border-[var(--primary)]/30 rounded-xl p-2.5 text-xs text-[var(--atelier-parchment)] outline-none transition-all appearance-none cursor-pointer shadow-inner"
          >
            <option value="">Seleccione variante</option>
            {productoSeleccionado?.variantes?.map((variante) => (
              <option className="uppercase" key={variante.id} value={variante.id}>
                {variante.talle?.nombre} / {variante.color?.nombre}
              </option>
            ))}
          </select>
        </div>
 
        <div className="flex flex-col w-20">
          <label htmlFor="stock" className="text-[9px] uppercase font-bold text-[var(--secondary)] tracking-widest ml-1 mb-1.5">
            Stock
          </label>
          <div id="stock" className="bg-[var(--atelier-ink)] border border-black/20 rounded-xl p-2.5 text-xs text-center font-mono opacity-60">
            {productoSeleccionado?.variantes?.find((v) => v.id == varianteSeleccionado)?.stock.toFixed(2) ?? '0.00'}
          </div>
        </div>
 
        <div className="flex flex-col w-24">
          <label htmlFor="cantidad" className="text-[9px] uppercase font-bold text-[var(--secondary)] tracking-widest ml-1 mb-1.5">
            Cantidad
          </label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            name="cantidad"
            id="cantidad"
            min={1}
            className="bg-[var(--atelier-ink)] w-full border border-black/20 focus:border-[var(--primary)]/30 rounded-xl p-2.5 text-xs text-center text-[var(--atelier-parchment)] outline-none transition-all shadow-inner"
          />
        </div>

        <button 
          onClick={handleAddVariantes} 
          className="flex-1 min-w-[120px] bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--neutral)] flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-black uppercase text-[10px] tracking-[0.1em] transition-all transform active:scale-95 shadow-lg shadow-[var(--primary)]/20"
        >
          <Plus size={16} />
          Agregar
        </button>
      </div>
    </div>
  );
};
