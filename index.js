import db from "./dababase/db.js";
import express from 'express'
import cors from 'cors'
import router from "./routes/rutasCiudades.js";

const app = express()
app.use(cors())
app.use('/', router)

const PORT = 5000

try {
    await db.authenticate()
    console.log('servidor conectado exitosamente')
} catch (error) {
    console.log('Error en la conexion' + error)
}

app.listen(PORT)

console.log('API escuchando en el puerto'+ PORT) 