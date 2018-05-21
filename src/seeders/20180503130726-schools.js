'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Schools', [{
        name: 'Good School 1',
        phone: '66-666666',
        street_adress: 'Schoolgatan 2',
        country_id: 4,
        city_id: 4,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      
      return queryInterface.bulkDelete('Schools', null, {});
    
  }
};
