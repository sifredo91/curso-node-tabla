const routerUser = require('express').Router();
const {
    userGet,
    userGetAll,
    userPost,
    userPut,
    userDelete
} = require('../../controllers/usuario')


routerUser.get(`/:name`, userGet)
routerUser.get(`/`, userGetAll)
routerUser.post(`/`, userPost)


routerUser.put(`/:id`, userPut)
routerUser.delete(`/:id`, userDelete)


module.exports = {
    routerUser
}