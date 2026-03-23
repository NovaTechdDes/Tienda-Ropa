import { Request, Response } from "express";
import { productoService, variante_productoService } from "../services";

export const productoController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const productos = await productoService.getAll();
      res.status(200).json({
        ok: true,
        productos,
      });
    } catch (error) {
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
      const { variantes, ...rest } = req.body;
      const data = await productoService.create(rest);

      await variante_productoService.create(data.id, variantes);

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
      const { variantes, ...rest } = req.body;
      await productoService.update(Number(id), rest);

      await variante_productoService.update(Number(id), variantes);

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
