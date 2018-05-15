'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Companies', [{
        name: 'Very good company1',
        information: 'miche bra bra bra',
        phone: '0704343233',
        street_adress: 'some adress 1',
        postal_code: 29166,
        logo_url: 'www.logo.com',
        website: 'goodcompany1.com',
        country_id: 1,
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Very good company2',
        information: 'miche bra bra bra',
        phone: '0704343233',
        street_adress: 'some adress 2',
        postal_code: 29166,
        logo_url: 'www.logo.com',
        website: 'goodcompany2.com',
        country_id: 2,
        city_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        name: 'Very good company3',
        information: 'miche bra bra bra',
        phone: '0704343233',
        street_adress: 'some adress 3',
        postal_code: 29166,
        logo_url: 'www.logo.com',
        website: 'goodcompany3.com',
        country_id: 3,
        city_id: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      
      return queryInterface.bulkDelete('Companies', null, {});
    
  }
};
