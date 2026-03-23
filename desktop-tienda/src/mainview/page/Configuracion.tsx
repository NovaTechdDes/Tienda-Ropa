
import { Talles } from '../components/talles/Talles'
import { useConfiguracion } from '../hooks/configuracion/useConfiguracion'

export const Configuracion = () => {
    const { data: configuracion } = useConfiguracion();
  return (
    <div>

        {/* Talles */}

        <Talles talles={configuracion?.talles}/>


        {/* Color */}



        {/* Categoria */}


        {/* Marca */}



        {/* Provedor */}

    </div>
  )
}
