"use strict";
import { Model, Sequelize } from "sequelize";
export default (sequelize: Sequelize, DataTypes: any) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models: any) {
      // define association here
    }
  }
  Category.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
