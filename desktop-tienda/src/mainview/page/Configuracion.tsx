import { useState } from 'react';
import { ListConfiguracion } from '../components/configuracion/ListConfiguracion';
import { useConfiguracion } from '../hooks/configuracion/useConfiguracion';
import { useMutateTalles } from '../hooks/talles/useMutateTalles';
import { useMutateColor } from '../hooks/colores/useMutateColor';
// import { useMutateMarcas } from '../hooks/marcas/useMutateMarcas';
// import { useMutateProvedor } from '../hooks/provedor/useMutateProvedot';
import { useMutateCategoria } from '../hooks/categorias/useMutateCategoria';
import { Header } from '../components/ui/Header';

export const Configuracion = () => {
  const { data: configuracion, isLoading } = useConfiguracion();

  const { actualizarTalle, crearTalle, eliminarTalle } = useMutateTalles();
  const { actualizarColor, agregarColor, eliminarColor } = useMutateColor();
  const { actualizarCategoria, agregarCategoria, eliminarCategoria } = useMutateCategoria();
  //const { actualizarMarca, agregarMarca, eliminarMarca } = useMutateMarcas();
  //const { actualizarProvedor, crearProvedor, eliminarProvedor } = useMutateProvedor();

  const [talle, setTalle] = useState('');
  const [categoria, setCategoria] = useState('');
  const [color, setColor] = useState('');
  //const [marca, setMarca] = useState('');
  //const [provedor, setProvedor] = useState('');

  if (isLoading) return <div className="p-10 text-[#d4af37] font-bold">Cargando configuración...</div>;

  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] p-6 md:p-10 text-[#f5f5f0]">
      <div className="max-w-[1600px] mx-auto">
        <Header titulo="Configuración" descripcion="Administración de parámetros del sistema (Talles, Colores, Marcas, etc.)" textoBoton="" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          {/* Talles */}
          <ListConfiguracion type="Talle" data={configuracion?.talles} actualizarType={actualizarTalle} eliminarType={eliminarTalle} valor={talle} setValor={setTalle} crearType={crearTalle} />

          {/* Color */}
          <ListConfiguracion type="Color" data={configuracion?.colores} actualizarType={actualizarColor} eliminarType={eliminarColor} valor={color} setValor={setColor} crearType={agregarColor} />

          {/* Categoria */}
          <ListConfiguracion
            type="Categoria"
            data={configuracion?.categorias}
            actualizarType={actualizarCategoria}
            eliminarType={eliminarCategoria}
            valor={categoria}
            setValor={setCategoria}
            crearType={agregarCategoria}
          />

          {/* Marca */}
          {/* <ListConfiguracion
            type="Marca"
            data={configuracion?.marcas}
            actualizarType={actualizarMarca}
            eliminarType={eliminarMarca}
            valor={marca}
            setValor={setMarca}
            crearType={agregarMarca}
          /> */}

          {/* Provedor */}
          {/* <div className="lg:col-span-2">
            <ListConfiguracion
              type="Provedor"
              data={configuracion?.provedor}
              actualizarType={actualizarProvedor}
              eliminarType={eliminarProvedor}
              valor={provedor}
              setValor={setProvedor}
              crearType={crearProvedor}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
