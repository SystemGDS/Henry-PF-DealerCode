'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Lesson extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Lesson.belongsTo(models.Course, { foreignKey: 'courseId' });
        }
    }
    Lesson.init({
        courseId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        videoUrl: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Lesson',
    });
    return Lesson;
};
