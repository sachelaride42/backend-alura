import express from "express";
import routesLivros from "./livroRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de NodeJS"));
    app.use(express.json(), routesLivros);
}

export default routes;