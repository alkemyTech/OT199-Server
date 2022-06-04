"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Organization.hasMany(models.Slide, {
        foreignKey: 'organizationId'
      });
    }
  }
  Organization.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      welcomeText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      aboutUsText: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      facebookUrl: DataTypes.STRING,
      instagramUrl: DataTypes.STRING,
      linkedinUrl: DataTypes.STRING,  
    },
    {
      sequelize,
      modelName: "Organization",
      paranoid: true,
    }
  );
  return Organization;
};
