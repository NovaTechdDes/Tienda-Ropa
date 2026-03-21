import { Request, Response } from "express";
import { productoService } from "../services";

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
      await productoService.create(req.body);
      res.status(201).json({
        ok: true,
        message: "Producto creado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error al crear el producto",
      });
    }
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await productoService.update(Number(id), req.body);
      res.status(200).json({
        ok: true,
        message: "Producto actualizado correctamente",
      });
    } catch (error) {
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
