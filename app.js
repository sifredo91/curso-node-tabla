const { Server } = require(`./entity/server`)

require('dotenv').config()

const server = new Server()

server.listen()