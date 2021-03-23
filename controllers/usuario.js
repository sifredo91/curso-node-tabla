const Sequelize = require('sequelize');
const { usuario } = require('../models');

const userPost = async(req = request, res = response) => {

    const body = req.body
    const user = await usuario.create(body)

    res.status(201).json({
        msg: `Usuario creado Correctamente`,
        user
    })
}
const userGetAll = (_, res) => {
    return usuario.findAll({})
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
}
const userGet = (req, res) => {
    return usuario.findOne({
            where: {
                name: req.params.name,
            }
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
}

const userPut = async(req = request, res = response) => {
    const { id } = req.params
    const body = req.body
    await usuario.update(body, {
        where: { id: id }
    });
    const user = await usuario.findOne({ where: { id: id } });

    res.status(201).json({
        msg: `Usuario actualizado Correctamente`,
        user
    })
}

const userDelete = async(req = request, res = response) => {
    const { id } = req.params
    const user = await usuario.findOne({ where: { id: id } });
    await usuario.destroy({
        where: { id: id }
    });

    res.status(201).json({
        msg: `Usuario eliminado Correctamente`,
        user
    })
}


module.exports = {
    userPost,
    userGetAll,
    userGet,
    userPut,
    userDelete
};