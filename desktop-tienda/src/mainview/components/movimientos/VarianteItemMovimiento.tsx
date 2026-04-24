import { Producto } from '../../interface/Producto';
import { Variante_Producto } from '../../interface/Variante_Producto';
import { useMovimientoStore } from '../../store';

interface Props {
  v: Producto;
}

const imgURL = import.meta.env.VITE_URL || 'http://localhost:3000';

export const VarianteItemMovimiento = ({ v }: Props) => {
  const { setVarianteSeleccionado, setProductoSeleccionado, varianteSeleccionado } = useMovimientoStore();

  const handleSeleccionarVariante = (variante: Variante_Producto) => {
    setVarianteSeleccionado(variante);
    setProductoSeleccionado(v);
  };

  return (
    <>
      {v?.variantes?.map((variante) => (
        <button
          key={variante.id}
          onClick={() => handleSeleccionarVariante(variante)}
          className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group ${
            varianteSeleccionado?.id === variante.id
              ? 'border-2 border-[var(--primary)]'
              : 'bg-[var(--atelier-ink)]/50 border-[var(--atelier-border)] hover:border-[var(--atelier-parchment-low)]/30 hover:translate-x-1'
          }`}
        >
          <div className="flex items-center gap-4 text-left">
            <div className={`p-2 rounded-lg bg-[var(--atelier-surface-2)] text-[var(--atelier-parchment-muted)]`}>
              <img alt={v.descripcion} src={`${imgURL}${v.img_url}`} className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-sm font-bold truncate max-w-[180px]">{v.descripcion}</h3>
              <p className="text-[11px] text-[var(--atelier-parchment-muted)] font-medium">
                {variante.sku} • {variante?.talle?.nombre}
              </p>
              <p className="text-[11px] text-[var(--atelier-parchment-muted)] font-medium">Color: {variante?.color?.nombre}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-[var(--atelier-parchment-low)] mb-0.5">Stock</p>
            <p className="text-sm font-black">{variante.stock.toFixed(2)}</p>
          </div>
        </button>
      ))}
    </>
  );
};
