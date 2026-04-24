import { Request, Response } from "express";
import { mov_productoService } from "../services";

export const mov_productoController = {
  getAll: async (_req: Request, res: Response) => {
    const movimientos = await mov_productoService.getAll();
    res.status(200).json(movimientos);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const movimiento = await mov_productoService.getById(Number(id));
    res.status(200).json(movimiento);
  },
  create: async (req: Request, res: Response) => {
    try {
      const movimiento = await mov_productoService.create(req.body);
      if (movimiento) {
        return res.status(201).json({
          ok: true,
          message: "Movimiento creado correctamente",
          movimiento,
        });
      }

      return res.status(400).json({
        ok: false,
        message: "No se pudo crear el movimiento",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ ok: false, message: "Error al crear el movimiento" });
    }
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const movimiento = await mov_productoService.update(Number(id), req.body);
    res.status(200).json(movimiento);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const movimiento = await mov_productoService.delete(Number(id));
    res.status(200).json(movimiento);
  },
};
