'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull : false,
        type: Sequelize.STRING
      },
      description: {
        allowNull : false,
        type: Sequelize.STRING
      },
      instructor: {
        allowNull : false,
        type: Sequelize.STRING
      },
      price: {
        allowNull : false,
        type: Sequelize.FLOAT
      },
      thumbnail: {
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
    await queryInterface.dropTable('courses');
  }
};