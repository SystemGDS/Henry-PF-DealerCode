
'use strict';
import { Model, Sequelize } from 'sequelize';

export default (sequelize : Sequelize, DataTypes : any) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : any) {
      // define association here
      Lesson.belongsTo(models.Course, { foreignKey : 'courseId'})
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


