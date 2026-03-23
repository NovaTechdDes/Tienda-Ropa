import { Request, Response } from "express";
import { talleService } from "../services";

export const talleController = {
  getAll: async (_req: Request, res: Response) => {
    const talles = await talleService.getAll();
    console.log(talles)
    res.status(200).json({
      ok: true,
      talles
    });
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const talle = await talleService.getById(Number(id));
    res.status(200).json({
      ok: true,
      talle
    });
  },
  create: async (req: Request, res: Response) => {
    try {
      await talleService.create(req.body);
      res.status(201).json({
        ok: true,
        mensaje: "Talle creado correctamente"
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Error al crear el talle"
      });
    }
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await talleService.update(Number(id), req.body);
      res.status(200).json({
        ok: true,
        mensaje: "Talle actualizado correctamente"
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Error al actualizar el talle"
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await talleService.delete(Number(id));
      res.status(200).json({
        ok: true,
        mensaje: "Talle eliminado correctamente"
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Error al eliminar el talle"
      });
    }
  },
};
