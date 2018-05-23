'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Students', [{
        first_name: 'Maja',
        last_name: 'Baja',
        phone: '070-6525457',
        street_adress: 'Nissegatan 7',
        social_security_number: '761122-0395',
        country_id: 3,
        city_id: 2,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      
      return queryInterface.bulkDelete('Students', null, {});
    
  }
};
