
import { Colores } from '../components/colores/Colores';
import { Talles } from '../components/talles/Talles'
import { useConfiguracion } from '../hooks/configuracion/useConfiguracion'

export const Configuracion = () => {
    const { data: configuracion } = useConfiguracion();
  return (
    <div>

        {/* Talles */}

        <Talles talles={configuracion?.talles}/>


        {/* Color */}
        <Colores colores={configuracion?.colores}/>



        {/* Categoria */}


        {/* Marca */}



        {/* Provedor */}

    </div>
  )
}
