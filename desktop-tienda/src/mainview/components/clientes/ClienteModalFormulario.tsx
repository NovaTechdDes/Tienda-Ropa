import { X, User, CreditCard, Phone, MapPin, Map, FileText, CheckCircle2 } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { Cliente } from '../../interface/Cliente';
import { useClientestore } from '../../store';
import { useMutateCliente } from '../../hooks/clientes/useMutateCliente';
import { mensaje } from '../../utils/mensaje';

const initialState: Cliente = {
  nombre: '',
  dni: '',
  telefono: '',
  direccion: '',
  localidad: '',
  observacion: '',
  activo: true,
};

export const ClienteModalFormulario = () => {
  const { closeModale, clienteSeleccionado } = useClientestore();
  const { postCliente, updateCliente } = useMutateCliente();
  const { onInputChange, onResetForm, nombre, dni, telefono, direccion, localidad, observacion, activo, formState } = useForm(clienteSeleccionado ?? initialState);

  const handleClose = () => {
    closeModale();
    onResetForm();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (clienteSeleccionado) {
      const res = await updateCliente.mutateAsync(formState);

      if (res) {
        mensaje('Cliente modificado exitosamente', 'success');
        closeModale();
        onResetForm();
      } else {
        mensaje('Error al modificar el cliente', 'error');
      }

      return;
    }

    const res = await postCliente.mutateAsync(formState);

    if (res) {
      mensaje('Cliente Cargado exitosamente', 'success');
      closeModale();
      onResetForm();
    } else {
      mensaje('Error al modificar el cliente', 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0a0a0b]/80 backdrop-blur-md transition-opacity" onClick={handleClose} />

      {/* Modal Surface */}
      <div className="relative w-full max-w-2xl bg-[#141416] border border-[rgba(255,255,255,0.08)] rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-[rgba(255,255,255,0.04)] flex justify-between items-center bg-[#1c1c1e]/50">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#f5f5f0]">{clienteSeleccionado ? 'Editar Cliente' : 'Nuevo Cliente'}</h2>
            <p className="text-[10px] text-[#bababb] uppercase tracking-widest mt-1">Información de contacto y facturación</p>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition-all text-[#bababb] hover:text-[#f5f5f0]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <form className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar" onSubmit={handleSubmit}>
          {/* Main Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Nombre Completo</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
                <input
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={onInputChange}
                  placeholder="Juan Pérez"
                  className="w-full bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* DNI */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">DNI / CUIL</label>
              <div className="relative group">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
                <input
                  type="text"
                  name="dni"
                  value={dni}
                  onChange={onInputChange}
                  placeholder="20-XXXXXXXX-X"
                  className="w-full bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Teléfono */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Teléfono</label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
                <input
                  type="text"
                  name="telefono"
                  value={telefono}
                  onChange={onInputChange}
                  placeholder="+54 9 XXX XXX-XXXX"
                  className="w-full bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Localidad */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Localidad</label>
              <div className="relative group">
                <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
                <input
                  type="text"
                  name="localidad"
                  value={localidad}
                  onChange={onInputChange}
                  placeholder="Ciudad / Provincia"
                  className="w-full bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Dirección (Full Width) */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Dirección Exacta</label>
            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
              <input
                type="text"
                name="direccion"
                value={direccion}
                onChange={onInputChange}
                placeholder="Calle, Número, Piso/Depto"
                className="w-full bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Observación (Full Width Textarea) */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Notas / Observaciones</label>
            <div className="relative group">
              <FileText className="absolute left-4 top-4 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
              <textarea
                name="observacion"
                value={observacion}
                onChange={onInputChange}
                rows={3}
                placeholder="Información adicional relevante del cliente..."
                className="w-full bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all placeholder:text-gray-600 resize-none"
              />
            </div>
          </div>

          {/* Estado Activo */}
          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer group w-fit">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" name="activo" checked={activo} onChange={onInputChange} className="peer sr-only" />
                <div className="w-6 h-6 rounded-lg border-2 border-[rgba(255,255,255,0.1)] peer-checked:border-[#d4af37] peer-checked:bg-[#d4af37]/10 transition-all duration-300" />
                <CheckCircle2 className="absolute opacity-0 peer-checked:opacity-100 text-[#d4af37] transition-all duration-300 transform scale-75 peer-checked:scale-100" size={16} />
              </div>
              <span className="text-sm font-medium text-[#bababb] group-hover:text-[#f5f5f0] transition-colors">Cliente Activo</span>
            </label>
          </div>

          {/* Buttons Footer */}
          <div className="pt-6 flex justify-end gap-3 border-t border-[rgba(255,255,255,0.04)]">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-[#a1a1aa] hover:text-[#f5f5f0] hover:bg-[rgba(255,255,255,0.03)] transition-all"
            >
              Cancelar
            </button>
            {clienteSeleccionado ? (
              <button
                type="submit"
                disabled={postCliente.isPending}
                className="px-8 py-2.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#0a0a0b] rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_8px_20px_-4px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {postCliente.isPending ? 'Actualizando...' : 'Actualizar Cliente'}
              </button>
            ) : (
              <button
                type="submit"
                disabled={postCliente.isPending}
                className="px-8 py-2.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#0a0a0b] rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_8px_20px_-4px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {postCliente.isPending ? 'Guardando...' : 'Guardar Cliente'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
