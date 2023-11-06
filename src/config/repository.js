import { MongoClient } from "mongodb";
import logger from "../log.js";

const url = 'mongodb://localhost:27017/mydb'
const client =  new MongoClient(url)

const dbName = 'LivrosAlura'

export class MongoRepository{

    constructor(){
        client.connect()
        this.db = client.db(dbName)
        this.collection = this.db.collection('livros')

    }

    async getAllLivros(){
        const result = await this.collection.find().toArray()
        console.log(result)
        return result
    }
    
    async getLivroById(id){
        console.log({ "id": id })
        const result = await this.collection.findOne({ "id": parseInt(id) })
        console.log(result)
        return result
    }

    insertLivros(livros){
        console.log(livros)
        this.collection.insertMany(livros)
    }

    async putLivros(id, livro){
        const result = await this.collection.findOneAndUpdate({"id":id}, { $set: livro })
            return result
        
    }

    async putLivros(id){
        console.log(id)
        console.log("vou fazer put")
        const result = await this.collection.findOneAndDelete({"id":id})
            return result
        
    }


}
