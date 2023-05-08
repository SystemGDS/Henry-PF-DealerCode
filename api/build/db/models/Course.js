"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Course extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Course.hasMany(models.Lesson);
            Course.hasMany(models.Comment);
        }
    }
    Course.init({
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        instructor: DataTypes.STRING,
        price: DataTypes.NUMBER,
        thumbnail: DataTypes.STRING,
        isDeleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: "course",
    });
    return Course;
};
