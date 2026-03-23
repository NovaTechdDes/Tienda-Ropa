import { Request, Response } from "express";
import { provedorService } from "../services";

export const provedorController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const provedores = await provedorService.getAll();
      res.status(200).json({
        ok: true,
        provedores,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error al obtener los provedores",
      });
    }
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const provedor = await provedorService.getById(Number(id));
      res.status(200).json({
        ok: true,
        provedor,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error al obtener el provedor",
      });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      await provedorService.create(req.body);
      res.status(201).json({
        ok: true,
        message: "Provedor creado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error al crear el provedor",
      });
    }
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await provedorService.update(Number(id), req.body);
      res.status(200).json({
        ok: true,
        message: "Provedor actualizado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error al actualizar el provedor",
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await provedorService.delete(Number(id));
      res.status(200).json({
        ok: true,
        message: "Provedor eliminado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error al eliminar el provedor",
      });
    }
  },
};
