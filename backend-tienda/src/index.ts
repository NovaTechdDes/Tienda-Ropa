import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clienteRoutes } from "./routes";
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

app.listen(PORT, async () => {
  console.log(`Servidor en http://localhost:${PORT}`);

  await initData();
});
