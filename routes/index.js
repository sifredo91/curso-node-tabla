const { crearUsuario, listarUsuario, buscarUsuario } = require('../controllers/usuario')
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Example project did not give you access to the api web services',
    }))
    app.post('/api/usuario/crear', crearUsuario)
    app.get('/api/usuario/listar', listarUsuario)
    app.get('/api/usuario/buscar/:name', buscarUsuario)

}