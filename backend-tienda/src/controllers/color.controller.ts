import { Request, Response } from "express";
import { colorService } from "../services";

export const colorController = {
  getAll: async (_req: Request, res: Response) => {
    const colors = await colorService.getAll();
    res.status(200).json(colors);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const color = await colorService.getById(Number(id));
    res.status(200).json(color);
  },
  create: async (req: Request, res: Response) => {
    const color = await colorService.create(req.body);
    res.status(201).json(color);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await colorService.update(Number(id), req.body);
      res.status(200).json({ ok: true, mensaje: "Color actualizado correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, mensaje: "Error al actualizar el color", error });
    }
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await colorService.delete(Number(id));
      res.status(200).json({ ok: true, mensaje: "Color eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, mensaje: "Error al eliminar el color", error });
    }
  },
};
