const express = require('express')
const cors = require('cors')
const bodyParser = require(`body-parser`)

class Server {
    constructor() {
        this.app = express()
        this.port = 8000
        this.path = `/api`
            //* Conectar a la Base de Datos
        this.conectarDB()
            //* Middlewares
        this.middlewares()
            //* Rutas de mi aplicacion
        this.routes()
    }

    async conectarDB() {}

    middlewares() {
        //* Cors
        this.app.use(cors())

        //* Lectura y Parseo de el Body
        this.app.use(express.json())
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));


        //* Directorio Publico
        this.app.use(express.static(`public`))
    }

    routes() {
        this.app.use(this.path, require(`../routes/api`))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo por el puerto: ${this.port}`);
        })
    }
}

module.exports = {
    Server
}