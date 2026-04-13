import { Request, Response } from "express";
import { productoService, variante_productoService } from "../services";

export const productoController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const { buscador } = req.query;
      const productos = await productoService.getAll(buscador as string);

      res.status(200).json({
        ok: true,
        productos,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: "Error al obtener los productos",
      });
    }
  },

  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const producto = await productoService.getById(Number(id));
      res.status(200).json({
        ok: true,
        producto,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error al obtener el producto",
      });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { variantes, imagen, precio_global, ...rest } = req.body;

      //Imagen
      const img_url = req.file
        ? `/uploads/productos/${req.file.filename}`
        : null;

      const data = await productoService.create({
        ...rest,
        img_url,
        precio_global: Number(precio_global),
      });

      await variante_productoService.create(data.id, JSON.parse(variantes));

      res.status(201).json({
        ok: true,
        message: "Producto creado correctamente",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: "Error al crear el producto",
      });
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const { variantes, imagen, precio_global, categoria_id, ...rest } =
        req.body;

      //Imagen
      const img_url = req.file
        ? `/uploads/productos/${req.file.filename}`
        : req.body.img_url
          ? req.body.img_url
          : null;

      await productoService.update(Number(id), {
        ...rest,
        img_url,
        categoria_id: Number(categoria_id),
        precio_global: Number(precio_global),
        id: Number(id),
      });

      await variante_productoService.update(Number(id), JSON.parse(variantes));

      res.status(200).json({
        ok: true,
        message: "Producto actualizado correctamente",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: "Error al actualizar el producto",
      });
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await productoService.delete(Number(id));
      res.status(200).json({
        ok: true,
        message: "Producto eliminado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error al eliminar el producto",
      });
    }
  },
};
