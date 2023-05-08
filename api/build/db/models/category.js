"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Category extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(_models) {
            // define association here
        }
    }
    Category.init({
        title: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "category",
    });
    return Category;
};
