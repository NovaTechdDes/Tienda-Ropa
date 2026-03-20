import { Request, Response } from "express";
import { clienteService } from "../services";

export const clienteController = {
  getAll: async (_req: Request, res: Response) => {
    const clientes = await clienteService.getAll();
    res.status(200).json(clientes);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const cliente = await clienteService.getById(Number(id));
    res.status(200).json(cliente);
  },
  create: async (req: Request, res: Response) => {
    const cliente = await clienteService.create(req.body);
    res.status(201).json(cliente);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const cliente = await clienteService.update(Number(id), req.body);
    res.status(200).json(cliente);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const cliente = await clienteService.delete(Number(id));
    res.status(200).json(cliente);
  },
};
