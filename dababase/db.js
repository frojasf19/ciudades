import { Sequelize } from "sequelize";

const db = new Sequelize('database_app', 'root', 'Aspirine123', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db