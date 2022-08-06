import db from "../dababase/db.js";
import { DataTypes } from "sequelize";

const ciudades = db.define('ciudades', {
    nombre:{
        type: DataTypes.JSON
    },
    tld:{
        type: DataTypes.JSON
    },
    capital:{
        type: DataTypes.JSON
    },
    region:{
        type: DataTypes.STRING
    },
    lenguajes:{
        type: DataTypes.JSON
    },
    fronteras:{
        type: DataTypes.JSON
    }
})

export default ciudades