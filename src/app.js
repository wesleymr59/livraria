import express from "express";
import logger from "./log.js";
import {MongoRepository} from "./repository.js"


var app = express()
app.use(express.json()) // for parsing application/json
const mongoRepo = new MongoRepository()

const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

app.get('/', (req, res)=>{
    res.status(200).json({"message":"hello"})
})

app.get('/livros', (req, res)=>{
    res.status(200).json(livros)
    logger.info({"Request": "/livros"})
})
app.get('/livros/:id', async (req, res)=>{
    const resultFindMongo =  await mongoRepo.getLivroById(req.params.id)
    console.log("req.params.id")
    console.log(resultFindMongo)
    logger.info({"Request": "/livros/:id"})
    res.status(200).send(resultFindMongo)
})

app.post('/livros', (req, res)=>{
    console.log(req.body)
    let bodyRequest = req.body
    mongoRepo.insertLivros(bodyRequest)
    res.status(204).send()
    logger.info({"Request": "/livros"})
})

export default app