'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Testimonials.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
<<<<<<< HEAD
    content: DataTypes.TEXT('long')
=======
    content: DataTypes.TEXT
>>>>>>> 2ffecef7042717d7c9381d8e30373b5cb639a140
  }, {
    sequelize,
    modelName: 'Testimonials',
    paranoid: true,
  });
  return Testimonials;
};