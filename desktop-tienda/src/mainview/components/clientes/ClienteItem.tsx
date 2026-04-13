import Swal from 'sweetalert2';
import { Cliente } from '../../interface/Cliente';
import { Pencil, Trash2, User } from 'lucide-react';
import { useMutateCliente } from '../../hooks/clientes/useMutateCliente';
import { mensaje } from '../../utils/mensaje';
import { useClientestore } from '../../store';

interface Props {
  cliente: Cliente;
}

export const ClienteItem = ({ cliente }: Props) => {
  const { openModal, setClienteSeleccionado } = useClientestore();
  const { deleteCliente } = useMutateCliente();

  const eliminarCliente = async () => {
    const { isConfirmed } = await Swal.fire({
      title: '¿Está seguro de eliminar el cliente?',
      text: 'No se podrá revertir la acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3f3f46',
      cancelButtonColor: '#d4af37',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (isConfirmed) {
      if (!cliente.id) return;

      const ok = await deleteCliente.mutateAsync(cliente.id);

      if (ok) {
        mensaje('Cliente eliminado correctamente', 'success');
      } else {
        mensaje('Error al eliminar el cliente', 'error');
      }
    }
  };

  const handleEdit = () => {
    setClienteSeleccionado(cliente);
    openModal();
  };

  return (
    <tr className="group">
      {/* Cliente Info */}
      <td className="bg-[#141416]/50 group-hover:bg-[#141416] border-y border-l border-white/5 group-hover:border-[#d4af37]/20 rounded-l-2xl px-6 py-5 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center border border-[#d4af37]/10 group-hover:border-[#d4af37]/30 transition-all duration-500 shadow-lg shadow-black/20">
            <User className="text-[#d4af37] opacity-70 group-hover:opacity-100 transition-opacity" size={22} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-[#f5f5f0] tracking-tight mb-0.5 group-hover:text-white transition-colors uppercase">{cliente.nombre}</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#3f3f46] font-bold uppercase tracking-wider">ID: {cliente.id}</span>
              {cliente.dni && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#3f3f46]"></span>
                  <span className="text-[10px] text-[#3f3f46] font-bold uppercase tracking-wider">DNI: {cliente.dni}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </td>

      {/* Contacto Info */}
      <td className="bg-[#141416]/50 group-hover:bg-[#141416] border-y border-white/5 group-hover:border-[#d4af37]/20 px-6 py-5 transition-all duration-300">
        <div className="flex flex-col gap-2 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#d4af37]/60" />
            <span className="text-xs text-[#a1a1aa] font-medium tracking-wide">{cliente.telefono || 'Sin teléfono'}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#3f3f46]" />
            <span className="text-[11px] text-[#52525b] font-medium italic truncate max-w-[250px]">
              {cliente.direccion ? `${cliente.direccion}${cliente.localidad ? `, ${cliente.localidad}` : ''}` : 'Sin dirección'}
            </span>
          </div>
        </div>
      </td>

      {/* Resumen */}
      <td className="bg-[#141416]/50 group-hover:bg-[#141416] border-y border-white/5 group-hover:border-[#d4af37]/20 px-6 py-5 transition-all duration-300">
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#3f3f46] font-bold mb-1.5">Compras</span>
            <div className="px-2.5 py-1 rounded-lg bg-[#0a0a0b] border border-white/5 text-center min-w-[32px]">
              <span className="text-xs text-[#f5f5f0] font-bold tabular-nums">0</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#3f3f46] font-bold mb-1.5">Gastado</span>
            <div className="px-2.5 py-1 rounded-lg bg-[#d4af37]/5 border border-[#d4af37]/10 text-center min-w-[64px]">
              <span className="text-xs text-[#d4af37] font-bold tabular-nums">$ 0.00</span>
            </div>
          </div>
        </div>
      </td>

      {/* Acciones */}
      <td className="bg-[#141416]/50 group-hover:bg-[#141416] border-y border-r border-white/5 group-hover:border-[#d4af37]/20 rounded-r-2xl px-6 py-5 text-right transition-all duration-300">
        {cliente.id === 1 ? null : (
          <div className="flex justify-end gap-2.5 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleEdit}
              className="p-2.5 bg-white/5 hover:bg-[#d4af37]/10 text-white/40 hover:text-[#d4af37] rounded-xl transition-all duration-300 border border-white/5 hover:border-[#d4af37]/30 group/btn shadow-lg"
            >
              <Pencil size={16} className="transition-transform group-hover/btn:-translate-y-0.5" />
            </button>
            <button
              onClick={eliminarCliente}
              className="p-2.5 bg-red-500/5 hover:bg-red-500/10 text-red-500/40 hover:text-red-500 rounded-xl transition-all duration-300 border border-red-500/10 hover:border-red-500/30 group/del shadow-lg"
            >
              <Trash2 size={16} className="transition-transform group-hover/del:scale-110" />
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};
