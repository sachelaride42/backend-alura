import express from "express";
import LivroController from "../controllers/livroController.js";

const routesLivros = express.Router();
routesLivros.get("/livros", LivroController.listarLivros);
routesLivros.get("/livros/busca", LivroController.listarLivrosPorEditora);
routesLivros.get("/livros/:id", LivroController.listarLivroPorId);
routesLivros.post("/livros", LivroController.cadastrarLivro);
routesLivros.put("/livros/:id", LivroController.atualizarLivro);
routesLivros.delete("/livros/:id", LivroController.deletarLivro);

export default routesLivros;