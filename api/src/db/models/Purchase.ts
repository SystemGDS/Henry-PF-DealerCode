'use strict';
import { Model, Sequelize } from 'sequelize';

export default (sequelize : Sequelize, DataTypes : any) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : any) {
      // define association here
      Purchase.belongsTo(models.User)
    }
  }

  Purchase.init({
    userId: DataTypes.STRING,
    amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'purchase',
  });
  return Purchase;
};