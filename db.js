const Sequelize = require('sequelize');

const FilmModel = require('./models/film');
const UserModel = require('./models/users');

const sequelize = new Sequelize('express', 'sifredo', 'administrador', {
    host: 'localhost',
    dialect: 'mysql'
});

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
    })

module.exports = {
    Film,
    User
}