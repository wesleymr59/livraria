import express from "express";
import LivroController from "../src/controllers/livroController.js";

const routes = express.Router()

routes.get("/", {"message":"api is running"})
routes.get("/livros", LivroController.listarLivros)