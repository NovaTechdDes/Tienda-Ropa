import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import Venta from "../page/Venta";
import { Productos } from "../page/Productos";

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
    ],
  },
]);
