'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valeur: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tags');
  }
};