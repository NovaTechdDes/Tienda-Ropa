import { LayoutGrid, Plus } from 'lucide-react'
import  { useState } from 'react'
import { useMutateColor } from '../../hooks/colores/useMutateColor';
import { ColorItem } from './ColorItem';
import { Color } from '../../interface/Color';

interface Props {
    colores: Color[];
}

export const Colores = ({colores}: Props) => {

    const[color, setColor] = useState<string>('');
    const {agregarColor } = useMutateColor();

    const handleSubmit = () => {
        if (!color.trim()) return;
        agregarColor.mutateAsync({nombre: color });
        setColor('');
    }

 return (
    <div className='max-w-6xl mx-auto p-6 space-y-8 h-full bg-[var(--atelier-ink)]'>
        {/* Header Section */}
        <div className='flex items-center gap-3 border-b border-[var(--atelier-border)] pb-6'>
            <div className='p-2.5 bg-[var(--atelier-surface-1)] rounded-xl border border-[var(--atelier-border-soft)] shadow-sm'>
                <LayoutGrid className='w-6 h-6 text-[var(--atelier-gold)]' />
            </div>
            <div>
                <h1 className='text-3xl font-bold text-[var(--atelier-parchment)] tracking-tight'>Gestión de Colores</h1>
                <p className='text-[var(--atelier-parchment-muted)] text-sm mt-0.5'>Crea y administra los colores disponibles para tu tienda</p>
            </div>
        </div>

        {/* Form Section */}
        <div className='bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-2xl p-6 shadow-xl transition-all hover:shadow-2xl hover:border-[var(--atelier-border-soft)]'>
            <div className='flex flex-col md:flex-row items-end gap-4'>
                <div className='flex-1 w-full space-y-2'>
                    <label htmlFor="color" className='text-sm font-medium text-[var(--atelier-parchment-muted)] px-1 uppercase tracking-wider'>
                        Nombre del Color
                    </label>
                    <input 
                        type="text" 
                        placeholder='Ej: Small, Large, 42, 44...' 
                        name="color" 
                        id="talle" 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)} 
                        className='w-full bg-[var(--atelier-surface-2)] text-[var(--atelier-parchment)] border border-[var(--atelier-border)] rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[var(--atelier-gold)] focus:border-transparent transition-all placeholder:text-[var(--atelier-parchment-low)]' 
                    />
                </div>
                <button 
                    onClick={handleSubmit} 
                    className='h-[50px] px-8 bg-[var(--atelier-gold)] hover:bg-[var(--atelier-gold-bright)] text-[var(--atelier-ink)] font-bold rounded-xl flex items-center gap-2 active:scale-95 transition-all shadow-lg hover:shadow-[var(--atelier-gold)]/20 shadow-black'
                >
                    <Plus className='w-5 h-5' />
                    <span>Agregar Color</span>
                </button>
            </div>
        </div>

        {/* List Section */}
        <div className='space-y-4'>
            <div className='flex items-center justify-between px-2'>
                <h2 className='text-lg font-semibold text-[var(--atelier-parchment)] flex items-center gap-2'>
                    Colores Existentes
                    <span className='bg-[var(--atelier-surface-2)] text-[var(--atelier-parchment-muted)] text-xs py-1 px-2 rounded-full border border-[var(--atelier-border)]'>
                        {colores?.length || 0}
                    </span>
                </h2>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {colores?.map((color) => (
                    <ColorItem key={color.id} color={color}/>
                ))}
            </div>
        </div>
    </div>
  )
}
