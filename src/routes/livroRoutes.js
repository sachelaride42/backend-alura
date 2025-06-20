import express from "express";
import LivroController from "../controllers/livroController.js";

const routesLivros = express.Router();
routesLivros.get("/livros", LivroController.listarLivros);

export default routesLivros;