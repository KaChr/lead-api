'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('countries', [{
        country_name: 'Sweden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        country_name: 'Iceland',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        country_name: 'Soumi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        country_name: 'Denmark',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('countries', null, {});
    
  }
};
