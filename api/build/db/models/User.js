'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Purchase, { foreignKey: 'userId' });
        }
    }
    User.init({
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        avatar: DataTypes.STRING,
        rtHash: DataTypes.STRING,
        isDeleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'user',
    });
    return User;
};
