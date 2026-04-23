import { X, Calendar, User, CreditCard, Package } from 'lucide-react';
import { useVentaStore } from '../../store/venta.store';
import { HistoricalVentaDetalleItem } from './HistoricalVentaDetalleItem';

export const VentaDetalleModal = () => {
  const { selectedVenta, isModalOpen, setIsModalOpen, setSelectedVenta } = useVentaStore();

  if (!isModalOpen || !selectedVenta) return null;

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedVenta(null);
  };

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

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={handleClose} />

      {/* Modal Surface */}
      <div className="relative w-full max-w-3xl bg-[var(--atelier-surface-1)] border border-black/50 rounded-[2.5rem] shadow-[var(--atelier-shadow-md)] overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">
        {/* Header Section */}
        <div className="relative px-8 pt-10 pb-6 bg-[var(--atelier-surface-2)] border-b border-[var(--atelier-border-soft)]">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--atelier-ink)]/50 hover:bg-[var(--primary)] text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-ink)] transition-all duration-300"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-[var(--primary-soft)] text-[var(--primary)] text-[10px] font-black uppercase tracking-widest rounded-full border border-[var(--primary)]/20">
                  {selectedVenta.tipo_venta}
                </span>
                <span className="text-[var(--atelier-parchment-muted)] text-xs font-medium">Comprobante: {selectedVenta.descuento}</span>
              </div>
              <h2 className="text-3xl font-black text-[var(--atelier-parchment)] tracking-tight">Detalle de Venta</h2>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 text-[var(--atelier-parchment-muted)]">
                <Calendar size={14} />
                <span className="text-xs font-medium">{formatDate(selectedVenta.fecha)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {/* Primer section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Info del cliente */}
            <div className="p-5 dark:bg-[var(--atelier-ink)] bg-gray-200 rounded-3xl border dark:border-white/5 border-gray-500 space-y-3">
              <div className="flex items-center gap-2 text-[var(--atelier-gold)] mb-1">
                <User size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Información del Cliente</span>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-[var(--atelier-parchment)]">{selectedVenta.nombre_cliente || 'Consumidor Final'}</p>
                {selectedVenta.dni_cliente && <p className="text-xs text-[var(--atelier-parchment-muted)]">DNI: {selectedVenta.dni_cliente}</p>}
                {selectedVenta.telefono_cliente && <p className="text-xs text-[var(--atelier-parchment-muted)]">Tel: {selectedVenta.telefono_cliente}</p>}
              </div>
            </div>

            {/* Pago y Transacción */}
            <div className="p-5 dark:bg-[var(--atelier-ink)] bg-gray-200 rounded-3xl border dark:border-white/5 border-gray-500 space-y-3">
              <div className="flex items-center gap-2 text-[var(--primary)] mb-1">
                <CreditCard size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Pago y Transacción</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[var(--atelier-parchment-muted)]">Método de Pago:</span>
                  <span className="text-sm font-bold text-[var(--atelier-parchment)] capitalize">{selectedVenta.metodo_pago}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Segundo section */}
          <div className="space-y-4 border border-black/80 dark:border-white/10 p-3 rounded-3xl">
            <div className="flex items-center gap-2 text-[var(--atelier-parchment)] ml-1">
              <Package size={18} className="text-[var(--atelier-gold)]" />
              <h3 className="text-xs font-black uppercase tracking-widest">Artículos Vendidos</h3>
            </div>

            <div className="bg-[var(--atelier-ink)] border border-white/5 rounded-3xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5 text-[10px] font-black uppercase tracking-widest text-[var(--atelier-parchment-muted)]">
                    <th className="px-6 py-4">Imagen</th>
                    <th className="px-6 py-4">Producto / Variante</th>
                    <th className="px-6 py-4 text-center">Cant.</th>
                    <th className="px-6 py-4 text-right">Precio Un.</th>
                    <th className="px-6 py-4 text-right">Subtotal</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/5">
                  {selectedVenta.detalles.length > 0 ? (
                    selectedVenta.detalles.map((detalle, idx) => <HistoricalVentaDetalleItem key={idx} detalleItem={detalle as any} />)
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-[var(--atelier-parchment-muted)] italic">
                        No hay detalles registrados para esta venta
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Section - Totals */}
        <div className="px-8 py-8 bg-[var(--atelier-surface-2)] border-t border-[var(--atelier-border-soft)]">
          <div className="flex flex-col items-end gap-3 max-w-xs ml-auto">
            <div className="flex justify-between w-full text-sm">
              <span className="text-[var(--atelier-parchment-muted)]">Subtotal Bruto:</span>
              <span className="font-medium text-[var(--atelier-parchment)]">{formatCurrency(selectedVenta.subtotal || 0)}</span>
            </div>
            <div className="flex justify-between w-full text-sm">
              <span className="text-rose-500">Descuento aplicado:</span>
              <span className="font-medium text-rose-500">-{formatCurrency(selectedVenta.descuento || 0)}</span>
            </div>
            <div className="h-px w-full bg-[var(--atelier-border-soft)] my-1" />
            <div className="flex justify-between w-full items-end">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] mb-1">Total Final</span>
              <span className="text-3xl font-black text-[var(--primary)] tracking-tighter">{formatCurrency(selectedVenta.total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
