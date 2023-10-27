import { MongoClient } from "mongodb";
import logger from "./log.js";

const url = 'mongodb://root:example@localhost:27017'
const client =  new MongoClient(url)

const dbName = 'LivrosAlura'

export class MongoRepository{

    constructor(){
        client.connect()
        this.db = client.db(dbName)
        this.collection = this.db.collection('livros')

    }
    
    insertLivros(livros){
        console.log(livros)
        this.collection.insertOne(livros)
        logger.info("Conexao estabelecida ao servidor do mongo")
    }
}
