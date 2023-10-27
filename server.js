import app from "./src/app.js"
import logger from "./src/log.js"

const PORT = 3500

app.listen(PORT, ()=>{
    logger.info("Servidor Iniciado")
})