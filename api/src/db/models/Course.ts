"use strict";
import { Model, Sequelize } from "sequelize";

export default (sequelize: Sequelize, DataTypes: any) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Course.hasMany(models.Lesson);
      Course.hasMany(models.Comment);
    }
  }

  Course.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      instructor: DataTypes.STRING,
      price: DataTypes.NUMBER,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "course",
    }
  );

  return Course;
};
