import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  categoriaRoutes,
  clienteRoutes,
  colorRoutes,
  configuracionDataRoutes,
  detalle_ventaRoutes,
  marcaRoutes,
  mov_productoRoutes,
  productoRoutes,
  provedorRoutes,
  talleRoutes,
  variante_productoRoutes,
  ventaRoutes,
} from "./routes";
import { initData } from "./init";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.use("/clientes", clienteRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/colores", colorRoutes);
app.use("/detalle_venta", detalle_ventaRoutes);
app.use("/marcas", marcaRoutes);
app.use("/provedores", provedorRoutes);
app.use("/productos", productoRoutes);
app.use("/variantes_producto", variante_productoRoutes);
app.use("/mov_producto", mov_productoRoutes);
app.use("/ventas", ventaRoutes);
app.use("/talles", talleRoutes);

app.use("/configuracion-data", configuracionDataRoutes);

app.listen(PORT, async () => {
  console.log(`Servidor en http://localhost:${PORT}`);

  await initData();
});
