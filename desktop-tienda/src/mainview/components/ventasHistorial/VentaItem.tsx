import { Venta } from '../../interface/Venta';
import { CreditCard, Banknote, ArrowRightLeft, User, Users, Eye, Printer, MoreHorizontal } from 'lucide-react';

interface Props {
  venta: Venta;
}

export const VentaItem = ({ venta }: Props) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(amount);
  };

  const formatDate = (date?: Date) => {
    if (!date) return '---';
    return new Intl.DateTimeFormat('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  };

  const getMetodoPagoIcon = (metodo: string) => {
    switch (metodo.toLowerCase()) {
      case 'efectivo':
        return <Banknote size={14} className="text-emerald-500" />;
      case 'tarjeta':
        return <CreditCard size={14} className="text-blue-500" />;
      case 'transferencia':
        return <ArrowRightLeft size={14} className="text-purple-500" />;
      default:
        return <Banknote size={14} />;
    }
  };

  const getTipoVentaBadge = (tipo: string) => {
    const isContado = tipo.toLowerCase() === 'contado';
    return (
      <span
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          isContado ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
        }`}
      >
        {isContado ? <User size={12} /> : <Users size={12} />}
        {tipo}
      </span>
    );
  };

  return (
    <tr className="group hover:bg-[var(--atelier-surface-2)]/50 transition-all duration-200">
      <td className="px-6 py-4">
        <span className="text-sm font-semibold text-[var(--atelier-parchment)] block">{formatDate(venta.fecha)}</span>
      </td>

      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[var(--atelier-parchment)]">{venta.nombre_cliente || 'Consumidor Final'}</span>
          {venta.dni_cliente && <span className="text-[10px] text-[var(--atelier-parchment-muted)] font-medium">DNI: {venta.dni_cliente}</span>}
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex flex-col gap-2">
          {getTipoVentaBadge(venta.tipo_venta)}
          <div className="flex items-center gap-2 text-xs text-[var(--atelier-parchment-muted)] ml-1">
            {getMetodoPagoIcon(venta.metodo_pago)}
            <span className="capitalize">{venta.metodo_pago}</span>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 text-right">
        <span className="text-sm font-medium text-[var(--atelier-parchment-muted)]">{formatCurrency(venta.subtotal)}</span>
      </td>

      <td className="px-6 py-4 text-right">
        <span className="text-sm font-medium text-rose-500">-{formatCurrency(venta.descuento)}</span>
      </td>

      <td className="px-6 py-4 text-right">
        <span className="text-base font-black text-[var(--primary)]">{formatCurrency(venta.total)}</span>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          <button
            className="p-2 rounded-lg bg-[var(--atelier-surface-2)] text-[var(--atelier-parchment-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary-soft)] transition-all"
            title="Ver Detalle"
          >
            <Eye size={18} />
          </button>
          <button
            className="p-2 rounded-lg bg-[var(--atelier-surface-2)] text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-gold)] hover:bg-[var(--atelier-gold)]/10 transition-all"
            title="Imprimir Ticket"
          >
            <Printer size={18} />
          </button>
          <button className="p-2 rounded-lg bg-[var(--atelier-surface-2)] text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-parchment)] transition-all">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};
