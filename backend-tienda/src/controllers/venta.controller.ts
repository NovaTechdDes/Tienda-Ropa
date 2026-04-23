import { Request, Response } from "express";
import { ventaService } from "../services";

export const ventaController = {
  getAll: async (req: Request, res: Response) => {
    const { desde, hasta, tipo, buscador } = req.query;
    const ventas = await ventaService.getAll(
      desde as string,
      hasta as string,
      tipo as string,
      buscador as string,
    );

    res.status(200).json({ ok: true, ventas });
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = await ventaService.getById(Number(id));
    res.status(200).json(venta);
  },
  create: async (req: Request, res: Response) => {
    await ventaService.create(req.body);
    res.status(201).json({ ok: true, message: "Venta creada exitosamente" });
  },
};
