'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement : true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull : false,
        type: Sequelize.STRING
      },
      password: {
        allowNull : false,
        type: Sequelize.STRING
      },
      email: {
        allowNull : false,
        unique : true,
        type: Sequelize.STRING
      },
      avatar: {
        allowNull : false,
        type: Sequelize.STRING
      },
      rtHash : {
        allowNull : true,
        type : Sequelize.STRING
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
    await queryInterface.dropTable('users');
  }
};