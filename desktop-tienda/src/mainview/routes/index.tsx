import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import Venta from "../page/Venta";
import { Productos } from "../page/Productos";
import { Configuracion } from "../page/Configuracion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "ventas",
        element: <Venta />,
      },
      {
        path: "productos",
        element: <Productos />,
      },
      {
        path: "configuracion",
        element: <Configuracion />,
      },
    ],
  },
]);
