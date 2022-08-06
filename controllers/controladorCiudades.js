import ciudades from "../models/modelosCiudades.js";

//mostramos todas las ciudades
export const mostrarCiudades = async (req, res) => {
    try {
        const ciudad = await ciudades.findAll()
        res.json(ciudad)
    } catch (error) {
        res.json({message: error.message})
    }
}