import mongoose from "mongoose";
import { autorSchema } from "./Autores.js";

const livroSchema = mongoose.Schema({
    id: {type: mongoose.Schema.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;