import livro from "./Models/Livro.js";


class LivroController {
    static async listarLivros(req, res){
        const resultFindAll = await livro.find()
        res.status(200).send(resultFindAll)
    }
}

export default LivroController