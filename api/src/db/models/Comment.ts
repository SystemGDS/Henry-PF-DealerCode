'use strict';
import { Model, Sequelize } from 'sequelize';

export default ( sequelize : Sequelize, DataTypes : any) => {


  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : any) {
      // define association here
      Comment.belongsTo(models.User, { foreignKey : 'userId'})
      Comment.belongsTo(models.Course, { foreignKey : 'courseId'})
    }
  }

  Comment.init({
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      // defaultValue: DataTypes.UUIDV4,
    },
    rating: {
      type:DataTypes.INTEGER,
      allowNull: false,
    }, 
    content:{
      type:DataTypes.STRING,
      allowNull:false,

    }, 
    courseId: {
      type:DataTypes.STRING,
      allowNull:false,
    },
   
  }, {
    sequelize,
    modelName: 'Comment',    
  });
  return Comment;
}
