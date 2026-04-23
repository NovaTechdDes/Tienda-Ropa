interface Detalle {
  precio: number;
  cantidad: number;
  variante: {
    producto: {
      descripcion: string;
      img_url: string;
    };
    sku: string;
    talle: {
      nombre: string;
    };
    color: {
      nombre: string;
    };
  };
}

interface Props {
  detalleItem: Detalle;
}
const imgURL = import.meta.env.VITE_URL || 'http://localhost:3000';

export const HistoricalVentaDetalleItem = ({ detalleItem }: Props) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(amount);
  };

  return (
    <tr className="text-sm">
      <td>
        <div className="flex justify-center">
          <img
            src={`${imgURL}${detalleItem.variante.producto.img_url}`}
            alt={detalleItem.variante.producto.descripcion}
            className="w-12 h-12 rounded-xl object-cover border border-[var(--atelier-border-soft)]"
          />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div>
            <span className="font-bold text-[var(--atelier-parchment)]">Art. {detalleItem.variante.producto.descripcion}</span>
            <div className="flex gap-2">
              <span className="text-[12px] text-[var(--atelier-parchment-muted)] uppercase tracking-tighter">Talle: {detalleItem.variante.talle.nombre}</span>
              <span className="text-[12px] text-[var(--atelier-parchment-muted)] uppercase tracking-tighter">Color: {detalleItem.variante.color.nombre}</span>
            </div>
          </div>
          <span className="text-[12px] text-[var(--atelier-parchment-muted)] uppercase tracking-tighter">SKU: {detalleItem.variante.sku}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-center font-medium text-[var(--atelier-parchment)]">{detalleItem.cantidad}</td>
      <td className="px-6 py-4 text-right text-[var(--atelier-parchment-muted)]">{formatCurrency(detalleItem.precio)}</td>
      <td className="px-6 py-4 text-right font-bold text-[var(--atelier-parchment)]">{formatCurrency(detalleItem.precio * detalleItem.cantidad)}</td>
    </tr>
  );
};
