import express from "express";
import logger from "./log.js";
import {MongoRepository} from "./config/repository.js"
import livro from "./Models/Livro.js";
import connectDatabase from "./config/dbConnect.js";

const connectionMongo = await connectDatabase()
connectionMongo.on("error",(err) =>{
    logger.error(err.message)
})

connectionMongo.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})
var app = express()
app.use(express.json()) // for parsing application/json
const mongoRepo = new MongoRepository()



app.get('/livros/:id', async (req, res)=>{
    const resultFindMongo =  await mongoRepo.getLivroById(req.params.id)
    const teste = await livro.find()
    console.log(teste)
    logger.info({"Request": "/livros/:id"})
    res.status(200).send(teste)
})

app.post('/livros', (req, res)=>{
    let bodyRequest = req.body
    mongoRepo.insertLivros(bodyRequest)
    res.status(204).send()
    logger.info({"Request": "/livros"})
})

app.put('/livros/:id', async (req, res)=>{
    let resultPut = await mongoRepo.putLivros(parseInt(req.params.id), req.body)
    if (resultPut == null){
        res.status(404).send("Erro ao Atualizar livro")
    }
    res.status(200).send(resultPut)
    logger.info({"Request": "/livros"})
})

app.delete('/livros/:id', async (req, res)=>{
    let resultdelete = await mongoRepo.putLivros(parseInt(req.params.id))
    if (resultdelete == null){
        res.status(404).send("Erro ao deletar livro")
    }
    res.status(200).send(resultPut)
    logger.info({"Request": "/livros"})
})

export default app