import { Talle } from '../../interface/Talle'
import { useMutateTalles } from '../../hooks/talles/useMutateTalles'
import { Trash, Edit3 } from 'lucide-react'
import Swal from 'sweetalert2'
import { mensaje } from '../../utils/mensaje'

interface Props {
    talle: Talle
}

export const TalleItem = ({ talle }: Props) => {
    const { actualizarTalle, eliminarTalle } = useMutateTalles();
    

    const handleDelete = async() => {
        const {isConfirmed } = await Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        });


        if(isConfirmed ) {
            const res = await eliminarTalle.mutateAsync(talle.id!)
            if(res){
                mensaje('Talle eliminado correctamente', 'success');
            }else{
                mensaje('Error al eliminar el talle', 'error');
            }
        }
    };

    const handleUpdate = async() => {
        const {isConfirmed, value } = await Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, actualizar',
            input: 'text',
            inputValue: talle.nombre,
        });


        if(isConfirmed ) {
            const res = await actualizarTalle.mutateAsync({id: talle.id!, nombre: value})
            if(res){
                mensaje('Talle actualizado correctamente', 'success');
            }else{
                mensaje('Error al actualizar el talle', 'error');
            }
        }
    }
    
    return (
        <div 
            key={talle.id} 
            className='group relative bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-2xl p-4 flex flex-col gap-4 shadow-md hover:shadow-2xl hover:border-[var(--atelier-border-soft)] hover:-translate-y-1 transition-all duration-300 overflow-hidden'
        >
            {/* Subtle Gradient Overlay on Hover */}
            <div className='absolute inset-0 bg-gradient-to-br from-[var(--atelier-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

            <div className='flex items-center justify-between relative z-10'>
                <div>
                    <span className='text-[var(--atelier-parchment-muted)] text-[10px] uppercase tracking-widest font-bold'>Talle</span>
                    <p className='text-[var(--atelier-parchment)] text-xl font-bold mt-0.5 leading-none transition-colors group-hover:text-[var(--atelier-gold)] uppercase'>
                        {talle.nombre}
                    </p>
                </div>
            </div>

            <div className='flex gap-2 relative z-10'>
                <button 
                    onClick={handleUpdate}
                    className='flex-1 bg-[var(--atelier-surface-2)] hover:bg-[var(--atelier-parchment)] hover:text-[var(--atelier-ink)] text-[var(--atelier-parchment)] border border-[var(--atelier-border)] rounded-xl py-2.5 flex items-center justify-center gap-2 transition-all duration-200 group/btn active:scale-95'
                >
                    <Edit3 className='w-4 h-4' />
                    <span className='text-xs font-semibold'>Editar</span>
                </button>
                <button 
                    onClick={handleDelete} 
                    className='aspect-square bg-[var(--atelier-surface-2)] hover:bg-red-500/10 hover:text-red-500 text-[var(--atelier-parchment-muted)] border border-[var(--atelier-border)] rounded-xl px-3 flex items-center justify-center transition-all duration-200 active:scale-95'
                    title="Eliminar Talle"
                >
                    <Trash className='w-4 h-4' />
                </button>
            </div>
        </div>
    )
}
