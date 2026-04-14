
import { useClientestore } from '../../store'
import { useClientes } from '../../hooks';
import { Loading } from '../ui/Loading';
import { ClienteItem } from './ClienteItem';

export const ClientesList = () => {
  const { buscador } = useClientestore();
  const { data: clientes, isLoading } = useClientes();

  if (isLoading) {
    return <Loading text="Cargando clientes..." />;
  }

  // Filtrado básico en el cliente (aunque idealmente debería ser en el backend)
  const clientesFiltrados = clientes?.filter(c => 
    c.nombre.toLowerCase().includes(buscador.toLowerCase()) ||
    c.dni?.toLowerCase().includes(buscador.toLowerCase()) ||
    c.telefono?.toLowerCase().includes(buscador.toLowerCase())
  );

  return (
    <div className="w-full overflow-x-auto mt-4 pb-10">
      <table className="w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="text-[var(--atelier-parchment-low)]">
            <th className="px-6 py-4 text-left text-[10px] uppercase tracking-[0.2em] font-bold">Cliente</th>
            <th className="px-6 py-4 text-left text-[10px] uppercase tracking-[0.2em] font-bold">Contacto</th>
            <th className="px-6 py-4 text-left text-[10px] uppercase tracking-[0.2em] font-bold text-center">Resumen</th>
            <th className="px-6 py-4 text-right text-[10px] uppercase tracking-[0.2em] font-bold">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados?.map((cliente) => (
            <ClienteItem key={cliente.id} cliente={cliente} />
          ))}
          {clientesFiltrados?.length === 0 && (
            <tr>
              <td colSpan={4} className="py-20 text-center text-[var(--atelier-parchment-low)] text-sm italic">
                No se encontraron clientes que coincidan con la búsqueda
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
