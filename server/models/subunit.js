'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subunit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subunit.belongsTo(models.Unit);
      Subunit.hasMany(models.Resource);
    }
  };
  Subunit.init({
    index: DataTypes.INTEGER,
    unitId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subunit',
  });
  return Subunit;
};