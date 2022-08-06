import express from 'express'
import { mostrarCiudades } from '../controllers/controladorCiudades.js'

const router = express()

router.get('/', mostrarCiudades)


export default router