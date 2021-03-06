'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuario.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    img: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    google: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};