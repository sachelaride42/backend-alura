import express from "express";
import routesLivros from "./livroRoutes.js";
import routesAutores from "./autorRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de NodeJS"));
    app.use(express.json(), routesLivros, routesAutores);
}

export default routes;