import React from 'react'
import { useCarritoStore } from '../../store';

export const ProductoSeleccionado = () => {

    const { productoSeleccionado, clearProductoSeleccionado } = useCarritoStore();

  return (
    <div>
        
        <div>
            <h3>{productoSeleccionado?.descripcion}</h3>
        </div>

        <div></div>
    </div>
  )
}
