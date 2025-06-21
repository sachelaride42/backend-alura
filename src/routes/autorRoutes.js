import express from "express";
import AutorController from "../controllers/autorController.js";

const routesAutores = express.Router();
routesAutores.get("/autores", AutorController.listarAutores);
routesAutores.get("/autores/:id", AutorController.listarAutorPorId);
routesAutores.post("/autores", AutorController.cadastrarAutor);
routesAutores.put("/autores/:id", AutorController.atualizarAutor);
routesAutores.delete("/autores/:id", AutorController.deletarAutor);

export default routesAutores;