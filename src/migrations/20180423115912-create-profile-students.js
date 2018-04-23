'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profile_students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.VARCHAR
      },
      age: {
        type: Sequelize.INTEGER
      },
      city_id: {
        type: Sequelize.INTERGER
      },
      image_adress: {
        type: Sequelize.VARCHAR
      },
      current_school: {
        type: Sequelize.VARCHAR
      },
      school_length: {
        type: Sequelize.VARCHAR
      },
      intern_period_start: {
        type: Sequelize.DATE
      },
      intern_period_end: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      knowledge: {
        type: Sequelize.TEXT
      },
      education: {
        type: Sequelize.TEXT
      },
      timestamp: {
        type: Sequelize.DATETIME
      },
      student_id: {
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
    return queryInterface.dropTable('Profile_students');
  }
};