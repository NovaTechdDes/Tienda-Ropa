import { ArrowRightLeft } from 'lucide-react';
import { useMovimientoStore } from '../../store';
import { PlusCircle, MinusCircle, FileText, Calendar, CheckCircle2, ChevronRight, Plus, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MovimientoVariante } from '../../interface/MovimientoVariante';
import { useMutateMovimientoVariante } from '../../hooks/variantes/useMutateMovimiento';
import { mensaje } from '../../utils/mensaje';

interface Variante extends MovimientoVariante {
  id_producto: string;
  precio_global: number;
  precio?: number;
}

export const FormularioMovimientoVariante = () => {
  const { varianteSeleccionado, productoSeleccionado, setVarianteSeleccionado, setProductoSeleccionado } = useMovimientoStore();
  const { addMovimiento } = useMutateMovimientoVariante();

  const [movementType, setMovementType] = useState<'ingreso' | 'egreso'>('ingreso');
  const [cantidad, setCantidad] = useState<number | ''>('');
  const [referencia, setReferencia] = useState<string>('');
  const [fecha, setFecha] = useState<Date>(new Date());
  const [precio, setPrecio] = useState<number | ''>(varianteSeleccionado?.precio || '');
  const [precio_global, setPrecioGlobal] = useState<number | ''>(productoSeleccionado?.precio_global || '');

  const handleAddMovimiento = async () => {
    if (!varianteSeleccionado?.id || !productoSeleccionado?.id) return;

    const movimiento: Variante = {
      variante_id: varianteSeleccionado?.id,
      tipo: movementType,
      cantidad: Number(cantidad) || 0,
      precio: Number(precio) || 0,
      id_producto: productoSeleccionado?.id,
      precio_global: Number(precio_global) || 0,
      referencia: referencia || '',
      fecha,
    };

    const res = await addMovimiento.mutateAsync(movimiento);

    if (res) {
      mensaje('Movimiento registrado correctamente', 'success');
      setVarianteSeleccionado(null);
      setProductoSeleccionado(null);
      setCantidad('');
      setPrecio('');
      setPrecioGlobal('');
      setReferencia('');
      setFecha(new Date());
      setMovementType('ingreso');
    } else {
      mensaje('Error al registrar el movimiento', 'error');
    }
  };

  useEffect(() => {
    setPrecio(varianteSeleccionado?.precio || '');
  }, [varianteSeleccionado]);

  useEffect(() => {
    setPrecioGlobal(productoSeleccionado?.precio_global || '');
  }, [productoSeleccionado]);

  return (
    <div className="lg:col-span-7 flex flex-col gap-6">
      {!varianteSeleccionado ? (
        <div className="h-full min-h-[450px] bg-[var(--atelier-surface-1)]/30 border-2 border-dashed border-[var(--atelier-border)] rounded-3xl flex flex-col items-center justify-center p-12 text-center group">
          <div className="w-20 h-20 rounded-3xl bg-[var(--atelier-surface-1)] flex items-center justify-center mb-6 shadow-2xl border border-[var(--atelier-border)] group-hover:scale-110 transition-transform duration-500">
            <ArrowRightLeft size={32} className="text-[var(--atelier-parchment-low)]" />
          </div>
          <h3 className="text-xl font-bold mb-2">Sin Variante Seleccionada</h3>
          <p className="text-[var(--atelier-parchment-muted)] max-w-xs text-sm leading-relaxed">
            Busca y selecciona una variante de producto en el panel izquierdo para comenzar la carga del movimiento.
          </p>
        </div>
      ) : (
        <div className="bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-3xl p-8 shadow-2xl backdrop-blur-md relative overflow-hidden animate-slide-down">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -mr-32 -mt-32" />

          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Registrar Movimiento</h2>
                <p className="text-[var(--atelier-parchment-muted)] text-xs font-medium">
                  Cargando datos para: <span className="text-[var(--atelier-parchment)]">{productoSeleccionado?.descripcion + ' ' + varianteSeleccionado?.sku}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setVarianteSeleccionado(null)}
              className="text-[11px] font-bold uppercase tracking-widest text-[var(--atelier-parchment-muted)] hover:text-[var(--primary)] transition-colors"
            >
              Cambiar selección
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Tipo de Movimiento */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--atelier-parchment-muted)] ml-1">Tipo de Movimiento</label>
              <div className="flex p-1.5 bg-[var(--atelier-ink)] rounded-2xl border border-[var(--atelier-border)]">
                <button
                  onClick={() => setMovementType('ingreso')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold text-sm ${
                    movementType === 'ingreso' ? 'bg-[var(--tertiary)] text-white shadow-lg' : 'text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-parchment)]'
                  }`}
                >
                  <PlusCircle size={18} />
                  Ingreso
                </button>
                <button
                  onClick={() => setMovementType('egreso')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold text-sm ${
                    movementType === 'egreso' ? 'bg-[var(--primary)] text-white shadow-lg' : 'text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-parchment)]'
                  }`}
                >
                  <MinusCircle size={18} />
                  Egreso
                </button>
              </div>
            </div>

            {/* Cantidad */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--atelier-parchment-muted)] ml-1">Cantidad</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[var(--atelier-parchment-low)] pointer-events-none">
                  {movementType === 'ingreso' ? <Plus size={16} /> : <Minus size={16} />}
                </div>
                <input
                  type="number"
                  placeholder="0"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full bg-[var(--atelier-ink)] border border-[var(--atelier-border)] focus:border-[var(--primary)]/40 rounded-2xl py-3.5 pl-10 pr-4 text-lg font-bold outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Precio Global */}
            <div className="flex  gap-3 w-full">
              <div className="bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-2xl p-4 shadow-2xl backdrop-blur-md relative overflow-hidden animate-slide-down">
                <label htmlFor="precio_global" className="text-[10px] uppercase tracking-widest font-bold text-[var(--atelier-parchment-muted)] ml-1">
                  Precio Global
                </label>
                <input
                  className="w-full bg-[var(--atelier-ink)] border text-right border-[var(--atelier-border)] focus:border-[var(--primary)]/40 rounded-2xl py-3.5 pl-4 pr-4 text-lg font-bold outline-none transition-all shadow-inner"
                  type="number"
                  name="precio_global"
                  id="precio_global"
                  value={precio_global}
                  onChange={(e) => setPrecioGlobal(e.target.value === '' ? '' : Number(e.target.value))}
                />
              </div>
            </div>

            {/* Precio Variante */}
            <div className="bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-2xl p-4 shadow-2xl backdrop-blur-md relative overflow-hidden animate-slide-down">
              <label htmlFor="precio_venta" className="text-[10px] uppercase tracking-widest font-bold text-[var(--atelier-parchment-muted)] ml-1">
                Precio Venta
              </label>
              <input
                className="w-full bg-[var(--atelier-ink)] border text-right border-[var(--atelier-border)] focus:border-[var(--primary)]/40 rounded-2xl py-3.5 pl-4 pr-4 text-lg font-bold outline-none transition-all shadow-inner"
                type="number"
                name="precio"
                id="precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value === '' ? '' : Number(e.target.value))}
              />
            </div>

            {/* Referencia */}
            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--atelier-parchment-muted)] ml-1">Referencia / Motivo</label>
              <div className="relative">
                <FileText className="absolute left-4 top-3.5 text-[var(--atelier-parchment-low)]" size={18} />
                <textarea
                  placeholder="Ej: Reposición de stock, Devolución, Ajuste manual..."
                  rows={2}
                  value={referencia}
                  onChange={(e) => setReferencia(e.target.value)}
                  className="w-full bg-[var(--atelier-ink)] border border-[var(--atelier-border)] focus:border-[var(--primary)]/40 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none transition-all shadow-inner resize-none"
                />
              </div>
            </div>

            {/* Fecha */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--atelier-parchment-muted)] ml-1">Fecha de Registro</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-low)]" size={18} />
                <input
                  type="date"
                  value={fecha.toISOString().split('T')[0]}
                  onChange={(e) => setFecha(new Date(e.target.value))}
                  className="w-full bg-[var(--atelier-ink)] border border-[var(--atelier-border)] focus:border-[var(--primary)]/40 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Botón Guardar */}
            <div className="flex items-end">
              <button
                onClick={handleAddMovimiento}
                className="w-full bg-[var(--neutral)] hover:bg-[var(--neutral)]/90 text-white font-bold py-4 rounded-2xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                Confirmar Movimiento
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
