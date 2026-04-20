import { createHashRouter, Navigate } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import Venta from "../page/Venta";
import { Productos } from "../page/Productos";
import { Configuracion } from "../page/Configuracion";
import { Clientes } from "../page/Clientes";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="ventas" replace/>
      },
      {
        path: "ventas",
        element: <Venta />,
      },
      {
        path: "productos",
        element: <Productos />,
      },
      {
        path: "clientes",
        element: <Clientes />,
      },
      {
        path: "configuracion",
        element: <Configuracion />,
      },
    ],
  },
]);
