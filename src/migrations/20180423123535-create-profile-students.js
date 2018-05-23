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
      /*name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },*/
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cities',
          key: 'id'
        }
      },
      image_adress: {
        type: Sequelize.STRING
      },
      current_school: {
        type: Sequelize.STRING
      },
      school_length: {
        type: Sequelize.STRING
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
      student_id: {
        type: Sequelize.INTEGER,
        unique: true,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Students',
          key: 'id'
        }
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