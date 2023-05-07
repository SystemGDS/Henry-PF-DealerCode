'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courseId: {
        references : {
          model : 'courses',
          key : 'id'
        },
        type: Sequelize.INTEGER
      },
      title: {
        allowNull : false,
        type: Sequelize.STRING
      },
      content: {
        allowNull : false,
        type: Sequelize.STRING
      },
      videoUrl: {
        allowNull : false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lessons');
  }
};