import { X, Plus, Tag, Layers, ChevronDown, Barcode, Image, DollarSign } from 'lucide-react';
import { useProductoStore } from '../../store';
import { useForm } from '../../hooks/useForm';
import { Producto } from '../../interface/Producto';
import { useConfiguracion } from '../../hooks/configuracion/useConfiguracion';
import { Categoria, Color, Talle } from '../../interface';
import { useState } from 'react';
import { VarianteItemFormulario } from './VarianteItemFormulario';
import { useMutateProducto } from '../../hooks';
import { mensaje } from '../../utils/mensaje';

const initialState: Producto = {
  descripcion: '',
  id: '',
  img_url: '',
  observacion: '',
  sku: '',
  variantes: [],
  precio_global: 0,
};

export const ProductoModalFormulario = () => {
  const { closeModal, productoSeleccionado } = useProductoStore();
  const { data: configuracion } = useConfiguracion();
  const { crearProducto, modificarProducto } = useMutateProducto();

  const [imagen, setImagen] = useState<File | null>(null);

  const [color, setColor] = useState<number>();
  const [talle, setTalle] = useState<number>();
  const [stock, setStock] = useState('');
  const [precio, setPrecio] = useState('');

  const [variantes, setVariantes] = useState<any[]>(productoSeleccionado?.variantes ?? []);

  const { formState, onInputChange, onResetForm, descripcion, observacion, sku, precio_global } = useForm(productoSeleccionado ?? initialState);

  const addVariante = () => {
    if (!color || !talle || !stock) return;

    setVariantes([
      ...variantes,
      {
        color_id: color,
        talle_id: talle,
        precio: Number(precio),
        stock: Number(stock),
      },
    ]);

    // Limpiar campos
    setColor(0);
    setTalle(0);
    setStock('');
    setPrecio('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('descripcion', descripcion);
    formData.append('observacion', observacion ? observacion : '');
    formData.append('sku', sku ? sku : '');
    formData.append('precio_global', String(precio_global ?? 0));
    formData.append('img_url', productoSeleccionado?.img_url ? productoSeleccionado.img_url : '');
    formData.append('imagen', imagen ? imagen : '');
    formData.append('variantes', JSON.stringify(variantes));

    if (productoSeleccionado) {
      formData.append('id', productoSeleccionado.id);
      const res = await modificarProducto.mutateAsync(formData);

      if (res) {
        closeModal();
        onResetForm();
        setVariantes([]);
        mensaje('Producto modificado exitosamente', 'success');
      } else {
        mensaje('Error al modificar el producto', 'error');
      }
      return;
    }

    const res = await crearProducto.mutateAsync(formData);

    if (res) {
      closeModal();
      onResetForm();
      setVariantes([]);
      mensaje('Producto creado exitosamente', 'success');
    } else {
      mensaje('Error al crear el producto', 'error');
    }
  };

  const deleteVariante = (index: number) => {
    setVariantes(variantes.filter((_, i) => i !== index));
  };

  const handleCloseModal = () => {
    closeModal();
    onResetForm();
    setVariantes([]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0a0a0b]/80 backdrop-blur-md transition-opacity" onClick={handleCloseModal} />

      {/* Modal Surface */}
      <div className="relative w-full max-w-2xl bg-[#141416] border border-[rgba(255,255,255,0.08)] rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-[rgba(255,255,255,0.04)] flex justify-between items-center bg-[#1c1c1e]/50">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#f5f5f0]">{productoSeleccionado ? 'Editar Producto' : 'Nuevo Producto'}</h2>
          </div>
          <button
            onClick={closeModal}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition-all text-[#bababb] hover:text-[#f5f5f0]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Nombre del Producto</label>
              <div className="relative group">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
                <input
                  type="text"
                  placeholder="Ej: Bikini Clásico Negro"
                  className="w-full placeholder:text-gray-500 bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all"
                  defaultValue={productoSeleccionado?.descripcion}
                  onChange={onInputChange}
                  name="descripcion"
                  value={descripcion}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Categoría</label>
              <div className="relative group">
                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
                <select
                  onChange={onInputChange}
                  name="categoria_id"
                  value={formState.categoria_id}
                  className="w-full bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="0">Seleccione una categoría</option>
                  {configuracion?.categorias?.map((categoria: Categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bababb]" size={16} />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Descripción / Observaciones</label>
            <textarea
              rows={3}
              onChange={onInputChange}
              name="observacion"
              value={observacion}
              placeholder="Detalles sobre el material, calce o cuidados..."
              className="w-full placeholder:text-gray-500 bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl p-4 text-sm text-[#f5f5f0] outline-none transition-all resize-none"
              defaultValue={productoSeleccionado?.observacion}
            />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Imagen</label>
            <div className="relative group">
              <Image className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
              <input
                type="file"
                className="w-full placeholder:text-gray-500 bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all"
                onChange={(e) => setImagen(e.target.files![0])}
                name="imagen"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Precio */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Precio General</label>
              <div className="relative group">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
                <input
                  type="number"
                  placeholder="25000"
                  className="w-full bg-[#0a0a0b] border placeholder:text-gray-500 border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all"
                  onChange={onInputChange}
                  name="precio_global"
                  value={precio_global ?? 0}
                />
              </div>
            </div>

            {/* SKU */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#bababb] font-bold ml-1">Codigo de Barra / SKU</label>
              <div className="relative group">
                <Barcode className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bababb] group-focus-within:text-[#d4af37] transition-colors" size={16} />
                <input
                  type="text"
                  placeholder="7798512574"
                  className="w-full bg-[#0a0a0b] border placeholder:text-gray-500 border-[rgba(255,255,255,0.04)] focus:border-[#d4af37]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f5f5f0] outline-none transition-all"
                  defaultValue={productoSeleccionado?.sku}
                  onChange={onInputChange}
                  name="sku"
                  value={sku}
                />
              </div>
            </div>
          </div>

          {/* Gestión de Variantes */}
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-end">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#f5f5f0]">Gestión de Variantes</h3>
            </div>

            {/* Agregar Una Variante */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-3 bg-[#0a0a0b]/50 border border-[rgba(255,255,255,0.04)] rounded-2xl">
              <select
                value={talle}
                name="talle_id"
                onChange={(e) => setTalle(Number(e.target.value))}
                className="bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] rounded-lg px-3 py-2 text-xs text-[#f5f5f0] outline-none focus:border-[#d4af37]/30"
              >
                <option value="">Talle</option>
                {configuracion?.talles.map((talle: Talle) => (
                  <option key={talle.id} value={talle.id}>
                    {talle.nombre}
                  </option>
                ))}
              </select>
              <select
                value={color}
                name="color_id"
                onChange={(e) => setColor(Number(e.target.value))}
                className="bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] rounded-lg px-3 py-2 text-xs text-[#f5f5f0] outline-none focus:border-[#d4af37]/30"
              >
                <option value="">Color</option>
                {configuracion?.colores.map((color: Color) => (
                  <option className="capitalize" key={color.id} value={color.id}>
                    {color.nombre}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Stock"
                className="bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] rounded-lg px-3 py-2 text-xs text-[#f5f5f0] outline-none focus:border-[#d4af37]/30"
              />
              <input
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                placeholder="Precio"
                className="bg-[#0a0a0b] border border-[rgba(255,255,255,0.04)] rounded-lg px-3 py-2 text-xs text-[#f5f5f0] outline-none focus:border-[#d4af37]/30"
              />
              <button type="button" onClick={addVariante} className="bg-[#d4af37] hover:bg-[#e5c158] text-[#0a0a0b] rounded-lg flex items-center justify-center transition-all h-full min-h-[36px]">
                <Plus size={18} />
              </button>
            </div>

            {/* Lista de Variantes */}
            <div className="border border-[rgba(255,255,255,0.04)] rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1c1c1e] text-[9px] uppercase tracking-widest text-[#bababb] font-bold">
                  <tr>
                    <th className="px-5 py-3 border-b border-[rgba(255,255,255,0.04)]">Talle</th>
                    <th className="px-5 py-3 border-b border-[rgba(255,255,255,0.04)]">Color</th>
                    <th className="px-5 py-3 border-b border-[rgba(255,255,255,0.04)]">Stock</th>
                    <th className="px-5 py-3 border-b border-[rgba(255,255,255,0.04)]">Precio</th>
                    <th className="px-5 py-3 border-b border-[rgba(255,255,255,0.04)] text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(255,255,255,0.02)]">
                  {variantes?.map((elem, index) => (
                    <VarianteItemFormulario key={index} elem={elem} index={index} talles={configuracion?.talles || []} colores={configuracion?.colores || []} onDelete={() => deleteVariante(index)} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Botones  */}
          <div className="px-8 py-6 bg-[#1c1c1e]/50 border-t border-[rgba(255,255,255,0.04)] flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-[#a1a1aa] hover:text-[#f5f5f0] hover:bg-[rgba(255,255,255,0.03)] transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#0a0a0b] rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_8px_20px_-4px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {productoSeleccionado ? 'Actualizar Producto' : 'Guardar Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
