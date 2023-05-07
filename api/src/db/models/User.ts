'use strict';
import { Model, Sequelize } from 'sequelize';

export default (sequelize: Sequelize , DataTypes : any ) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : any) {
      // define association here
      User.hasMany(models.Purchase,{ foreignKey : 'userId'})
    }
  }
  
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar : DataTypes.STRING,
    rtHash : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};