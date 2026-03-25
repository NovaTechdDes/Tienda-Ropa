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

    addItemCarrito(varianteSeleccionado, cantidad);
    setCantidad(1);
    setVarianteSeleccionado('');
  };

  if (!productoSeleccionado) return null;

  return (
    <div className="bg-[#141416] border border-[rgba(255,255,255,0.06)] rounded-2xl p-3">
      <div className="mb-2">
        <h3 className="text-sm font-bold text-[#f5f5f0]">{productoSeleccionado?.descripcion}</h3>
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <label htmlFor="" className="text-[10px] uppercase font-bold text-[#3f3f46] tracking-widest ml-1">Variante</label>
          <select
            name="variante"
            id="variante"
            value={varianteSeleccionado}
            onChange={(e) => setVarianteSeleccionado(e.target.value)}
            className="bg-[#0a0a0b] border border-[rgba(255,255,255,0.06)] rounded-2xl p-2 mt-2"
          >
            <option value="">Seleccione una variante</option>
            {productoSeleccionado?.variantes?.map((variante) => (
              <option className="uppercase" key={variante.id} value={variante.id}>
                {variante.talle?.nombre}/{variante.color?.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="stock" className="text-[10px] uppercase font-bold text-[#3f3f46] tracking-widest ml-1">Stock</label>
          <p id="stock" className="bg-[#0a0a0b] border mt-2 border-[rgba(255,255,255,0.06)] rounded-2xl p-2">
            {productoSeleccionado?.variantes?.find((v) => v.id == varianteSeleccionado)?.stock.toFixed(2) ?? '0.00'}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="cantidad" className="text-[10px] uppercase font-bold text-[#3f3f46] tracking-widest ml-1">Cantidad</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            name="cantidad"
            id="cantidad"
            min={1}
            className="bg-[#0a0a0b] mt-2 w-28 border border-[rgba(255,255,255,0.06)] rounded-2xl p-2"
          />
        </div>
        <button onClick={handleAddVariantes} className="bg-[#d4af37] flex items-center gap-2 mt-auto hover:bg-[#b89630] text-[#0a0a0b] rounded-xl p-2 font-bold uppercase text-[10px] tracking-widest">
          <Plus size={14} />
          Agregar
        </button>
      </div>
    </div>
  );
};
