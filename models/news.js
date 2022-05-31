'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News.belongsTo(models.Categories, {
        as: 'categories',
        foreignKey: {
          name: 'categoryId'
        }
      });
    }
  }
  News.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'News',
    paranoid: true,
  });
  return News;
};