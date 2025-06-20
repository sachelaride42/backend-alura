// import http from "http";
import "dotenv/config";
import app from "./src/app.js";
const PORT = 3000;

// const rotas = {
//     "/": "Curso de Express",
//     "/livros": "Você acessou a rota livros",
//     "/assinaturas": "Você acessou a rota assinaturas"
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
// });

// server.listen(3000, () => {
//     console.log("Servidor escutando na porta", PORT);
// });

app.listen(3000, () => {
    console.log("Servidor escutando na porta", PORT);
});