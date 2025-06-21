import { autor } from "../models/Autores.js";

class AutorController {
    static async listarAutores(req, res) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }
        catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }
    static async cadastrarAutor(req, res) {
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Criado com sucesso", autor: novoAutor});
        } catch (erro) {
            res.status(500).json({message: `message: ${erro.message} - falha ao cadastrar autor`});
        }
    }
    static async listarAutorPorId(req, res) {
        try{
            const id = req.params.id;
            const autorProcurado = await autor.findById(id);
            res.status(200).json(autorProcurado);
        }
        catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }
    static async atualizarAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "autor atualizado"});
        }
        catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }
    static async deletarAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "autor excluído com sucesso"});
        }
        catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na exclusão`});
        }
    }
}

export default AutorController;