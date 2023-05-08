'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Comment extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Comment.belongsTo(models.User, { foreignKey: 'userId' });
            Comment.belongsTo(models.Course, { foreignKey: 'courseId' });
        }
    }
    Comment.init({
        commentId: DataTypes.INTEGER,
        rating: DataTypes.INTEGER,
        content: DataTypes.INTEGER,
        courseId: DataTypes.INTEGER,
        isDeleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Comment',
    });
    return Comment;
};
