import { useState } from "react";
import { ListConfiguracion } from "../components/configuracion/ListConfiguracion";
import { useConfiguracion } from "../hooks/configuracion/useConfiguracion";
import { useMutateTalles } from "../hooks/talles/useMutateTalles";
import { useMutateColor } from "../hooks/colores/useMutateColor";
import { useMutateMarcas } from "../hooks/marcas/useMutateMarcas";
import { useMutateProvedor } from "../hooks/provedor/useMutateProvedot";
import { useMutateCategoria } from "../hooks/categorias/useMutateCategoria";

export const Configuracion = () => {
  const { data: configuracion, isLoading } = useConfiguracion();

  const { actualizarTalle, crearTalle, eliminarTalle } = useMutateTalles();
  const { actualizarColor, agregarColor, eliminarColor } = useMutateColor();
  const { actualizarCategoria, agregarCategoria, eliminarCategoria } =
    useMutateCategoria();
  const { actualizarMarca, agregarMarca, eliminarMarca } = useMutateMarcas();
  const { actualizarProvedor, crearProvedor, eliminarProvedor } =
    useMutateProvedor();

  const [talle, setTalle] = useState("");
  const [categoria, setCategoria] = useState("");
  const [color, setColor] = useState("");
  const [marca, setMarca] = useState("");
  const [provedor, setProvedor] = useState("");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {/* Talles */}

      <ListConfiguracion
        type="Talle"
        data={configuracion?.talles}
        actualizarType={actualizarTalle}
        eliminarType={eliminarTalle}
        valor={talle}
        setValor={setTalle}
        crearType={crearTalle}
      />

      {/* Color */}
      <ListConfiguracion
        type="Color"
        data={configuracion?.colores}
        actualizarType={actualizarColor}
        eliminarType={eliminarColor}
        valor={color}
        setValor={setColor}
        crearType={agregarColor}
      />

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
      <ListConfiguracion
        type="Marca"
        data={configuracion?.marcas}
        actualizarType={actualizarMarca}
        eliminarType={eliminarMarca}
        valor={marca}
        setValor={setMarca}
        crearType={agregarMarca}
      />

      {/* Provedor */}
      <ListConfiguracion
        type="Provedor"
        data={configuracion?.provedor}
        actualizarType={actualizarProvedor}
        eliminarType={eliminarProvedor}
        valor={provedor}
        setValor={setProvedor}
        crearType={crearProvedor}
      />
    </div>
  );
};
