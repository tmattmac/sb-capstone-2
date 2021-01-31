'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resource.belongsToOne(models.Subunit);
      Resource.belongsToMany(models.User, {
        through: {
          model: models.Completion
        }
      });
    }
  };
  Resource.init({
    subunitId: DataTypes.INTEGER,
    index: DataTypes.INTEGER,
    title: DataTypes.STRING,
    data: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Resource',
  });
  return Resource;
};