import express from "express";
import fs from "fs";

const app = express();
const mediaPath = "/app/media"; // vai ser o volume que você vai montar depois

// Servir os arquivos estáticos
app.use("/media", express.static(mediaPath));

// Rota para listar os arquivos
app.get("/list", (req, res) => {
  const files = fs.readdirSync(mediaPath);
  res.json(files);
});

// Porta do container (use a mesma no EasyPanel)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
