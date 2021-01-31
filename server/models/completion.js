'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Completion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Completion.init({
    username: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
    resourceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Completion',
  });
  return Completion;
};