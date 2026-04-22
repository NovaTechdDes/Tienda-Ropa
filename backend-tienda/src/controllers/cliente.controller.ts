import { Request, Response } from "express";
import { clienteService } from "../services";

export const clienteController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const clientes = await clienteService.getAll();
      res.status(200).json({ ok: true, clientes });
    } catch (error) {
      res
        .status(500)
        .json({ ok: false, error: "Error al obtener los clientes" });
    }
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const cliente = await clienteService.getById(Number(id));
      res.status(200).json({ ok: true, cliente });
    } catch (error) {
      res.status(500).json({ ok: false, error: "Error al obtener el cliente" });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      await clienteService.create(req.body);
      res
        .status(201)
        .json({ ok: true, mensaje: "Cliente creado exitosamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ ok: false, error: "Error al crear el cliente" });
    }
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await clienteService.update(Number(id), req.body);
      res
        .status(200)
        .json({ ok: true, mensaje: "Cliente actualizado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ ok: false, error: "Error al actualizar el cliente" });
    }
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await clienteService.delete(Number(id));
      res
        .status(200)
        .json({ ok: true, mensaje: "Cliente eliminado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ ok: false, error: "Error al eliminar el cliente" });
    }
  },
};
