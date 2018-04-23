'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING50
      },
      last_name: {
        type: Sequelize.STRING50
      },
      email: {
        type: Sequelize.STRING50
      },
      phone: {
        type: Sequelize.STRING50
      },
      street_adress: {
        type: Sequelize.STRING50
      },
      social_security_number: {
        type: Sequelize.STRING50
      },
      timestamp: {
        type: Sequelize.DATE
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      city_id: {
        type: Sequelize.INTERGER
      },
      user_id: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};