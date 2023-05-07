'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Purchase extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Purchase.belongsTo(models.User);
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
