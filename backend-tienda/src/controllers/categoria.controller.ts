import { Request, Response } from "express";
import { CategoriaService } from "../services";

export const categoriaController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await CategoriaService.getAll();
      res.status(200).json({
        ok: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener las categorias",
      });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const data = await CategoriaService.create(req.body);
      res.status(200).json({
        ok: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "Error al crear la categoria",
      });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const data = await CategoriaService.update(
        Number(req.params.id),
        req.body,
      );
      res.status(200).json({
        ok: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "Error al actualizar la categoria",
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const data = await CategoriaService.delete(Number(req.params.id));
      res.status(200).json({
        ok: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "Error al eliminar la categoria",
      });
    }
  },
};
