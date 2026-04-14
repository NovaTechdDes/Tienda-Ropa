import { X, Plus, Tag, Layers, ChevronDown, Image, DollarSign } from 'lucide-react';
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
  const [sku, setSku] = useState('');

  const [variantes, setVariantes] = useState<any[]>(productoSeleccionado?.variantes ?? []);

  const { formState, onInputChange, onResetForm, descripcion, observacion, precio_global, categoria_id } = useForm(productoSeleccionado ?? initialState);

  const addVariante = () => {
    if (!color || !talle || !stock) return;

    setVariantes([
      ...variantes,
      {
        color_id: color,
        talle_id: talle,
        precio: Number(precio),
        stock: Number(stock),
        sku: sku,
      },
    ]);

    // Limpiar campos
    setColor(0);
    setTalle(0);
    setStock('');
    setPrecio('');
    setSku('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('descripcion', descripcion);
    formData.append('categoria_id', categoria_id?.toString() ?? '0');
    formData.append('observacion', observacion ? observacion : '');
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
      <div className="absolute inset-0 bg-[var(--atelier-ink)]/80 backdrop-blur-md transition-opacity" onClick={handleCloseModal} />

      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-[2rem] shadow-[var(--atelier-shadow-md)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-[var(--atelier-border-soft)] flex justify-between items-center bg-[var(--atelier-surface-2)]/50">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[var(--atelier-parchment)]">{productoSeleccionado ? 'Editar Producto' : 'Nuevo Producto'}</h2>
          </div>
          <button
            onClick={closeModal}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--atelier-parchment)]/3 hover:bg-[var(--atelier-parchment)]/6 transition-all text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-parchment)]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold ml-1">Nombre del Producto</label>
              <div className="relative group">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-muted)] group-focus-within:text-[var(--atelier-gold)] transition-colors" size={16} />
                <input
                  type="text"
                  placeholder="Ej: Bikini Clásico Negro"
                  className="w-full placeholder:text-[var(--atelier-parchment-low)] bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] focus:border-[var(--atelier-gold)]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all"
                  defaultValue={productoSeleccionado?.descripcion}
                  onChange={onInputChange}
                  name="descripcion"
                  value={descripcion}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold ml-1">Categoría</label>
              <div className="relative group">
                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-muted)] group-focus-within:text-[var(--atelier-gold)] transition-colors" size={16} />
                <select
                  onChange={onInputChange}
                  name="categoria_id"
                  value={formState.categoria_id}
                  className="w-full bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] focus:border-[var(--atelier-gold)]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="0">Seleccione una categoría</option>
                  {configuracion?.categorias?.map((categoria: Categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-muted)]" size={16} />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold ml-1">Descripción / Observaciones</label>
            <textarea
              rows={3}
              onChange={onInputChange}
              name="observacion"
              value={observacion}
              placeholder="Detalles sobre el material, calce o cuidados..."
              className="w-full placeholder:text-[var(--atelier-parchment-low)] bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] focus:border-[var(--atelier-gold)]/30 rounded-xl p-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all resize-none"
              defaultValue={productoSeleccionado?.observacion}
            />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold ml-1">Imagen</label>
            <div className="relative group">
              <Image className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-muted)] group-focus-within:text-[var(--atelier-gold)] transition-colors" size={16} />
              <input
                type="file"
                className="w-full placeholder:text-[var(--atelier-parchment-low)] bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] focus:border-[var(--atelier-gold)]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all"
                onChange={(e) => setImagen(e.target.files![0])}
                name="imagen"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Precio */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold ml-1">Precio General</label>
              <div className="relative group">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--atelier-parchment-muted)] group-focus-within:text-[var(--atelier-gold)] transition-colors" size={16} />
                <input
                  type="number"
                  placeholder="25000"
                  className="w-full bg-[var(--atelier-ink)] border placeholder:text-[var(--atelier-parchment-low)] border-[var(--atelier-border-soft)] focus:border-[var(--atelier-gold)]/30 rounded-xl py-3 pl-12 pr-4 text-sm text-[var(--atelier-parchment)] outline-none transition-all"
                  onChange={onInputChange}
                  name="precio_global"
                  value={precio_global ?? 0}
                />
              </div>
            </div>
          </div>

          {/* Gestión de Variantes */}
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-end">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--atelier-parchment)]">Gestión de Variantes</h3>
            </div>

            {/* Agregar Una Variante */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 p-3 bg-[var(--atelier-ink)]/50 border border-[var(--atelier-border-soft)] rounded-2xl">
              <select
                value={talle}
                name="talle_id"
                onChange={(e) => setTalle(Number(e.target.value))}
                className="bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] rounded-lg px-3 py-2 text-xs text-[var(--atelier-parchment)] outline-none focus:border-[var(--atelier-gold)]/30"
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
                className="bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] rounded-lg px-3 py-2 text-xs text-[var(--atelier-parchment)] outline-none focus:border-[var(--atelier-gold)]/30"
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
                className="bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] rounded-lg px-3 py-2 text-xs text-[var(--atelier-parchment)] outline-none focus:border-[var(--atelier-gold)]/30"
              />
              <input
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                placeholder="Precio"
                className="bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] rounded-lg px-3 py-2 text-xs text-[var(--atelier-parchment)] outline-none focus:border-[var(--atelier-gold)]/30"
              />
              <input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="SKU"
                className="bg-[var(--atelier-ink)] border border-[var(--atelier-border-soft)] rounded-lg px-3 py-2 text-xs text-[var(--atelier-parchment)] outline-none focus:border-[var(--atelier-gold)]/30"
              />
              <button type="button" onClick={addVariante} className="bg-[var(--atelier-gold)] hover:bg-[var(--atelier-gold-bright)] text-[var(--atelier-ink)] rounded-lg flex items-center justify-center transition-all h-full min-h-[36px]">
                <Plus size={18} />
              </button>
            </div>

            {/* Lista de Variantes */}
            <div className="border border-[var(--atelier-border-soft)] rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[var(--atelier-surface-2)] text-[9px] uppercase tracking-widest text-[var(--atelier-parchment-muted)] font-bold">
                  <tr>
                    <th className="px-5 py-3 border-b border-[var(--atelier-border-soft)]">Talle</th>
                    <th className="px-5 py-3 border-b border-[var(--atelier-border-soft)]">Color</th>
                    <th className="px-5 py-3 border-b border-[var(--atelier-border-soft)]">Stock</th>
                    <th className="px-5 py-3 border-b border-[var(--atelier-border-soft)]">Precio</th>
                    <th className="px-5 py-3 border-b border-[var(--atelier-border-soft)]">SKU</th>
                    <th className="px-5 py-3 border-b border-[var(--atelier-border-soft)] text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--atelier-border-soft)]/50">
                  {variantes?.map((elem, index) => (
                    <VarianteItemFormulario key={index} elem={elem} index={index} talles={configuracion?.talles || []} colores={configuracion?.colores || []} onDelete={() => deleteVariante(index)} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Botones  */}
          <div className="px-8 py-6 bg-[var(--atelier-surface-2)]/50 border-t border-[var(--atelier-border-soft)] flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-parchment)] hover:bg-[var(--atelier-parchment)]/3 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 bg-[var(--atelier-gold)] hover:bg-[var(--atelier-gold-bright)] text-[var(--atelier-ink)] rounded-xl text-xs font-bold uppercase tracking-widest shadow-[var(--atelier-shadow-md)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {productoSeleccionado ? 'Actualizar Producto' : 'Guardar Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
