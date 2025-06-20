import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Conexão com o banco falhou. Mensagem:", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco bem-sucedida.");
});

const app = express();
// app.use(express.json());
routes(app);


// app.get("/", (req, res) => {
//     res.status(200).send("Curso de Node.js");
// });

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({});
//     res.status(200).json(listaLivros);
// });

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    console.log(req.body);
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;

