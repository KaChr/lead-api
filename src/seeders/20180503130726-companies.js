'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Companies', [{
        name: 'Very good company1',
        information: 'miche bra bra bra 1.',
        phone: '0704343233',
        street_adress: 'some adress 1',
        postal_code: 29166,
        logo_url: 'http://www.featherstonemedia.co.uk/wp-content/uploads/2014/03/wordpress-logo-200x200.png',
        website: 'goodcompany1.com',
        country_id: 1,
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Very good company2',
        information: 'miche bra bra bra 2.',
        phone: '0704343233',
        street_adress: 'some adress 2',
        postal_code: 29166,
        logo_url: 'https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png',
        website: 'goodcompany2.com',
        country_id: 2,
        city_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        name: 'Very good company3',
        information: 'miche bra bra bra 3.',
        phone: '0704343233',
        street_adress: 'some adress 3',
        postal_code: 29166,
        logo_url: 'http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png',
        website: 'goodcompany3.com',
        country_id: 3,
        city_id: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        name: 'Very good company4',
        information: 'miche bra bra bra 4.',
        phone: '0704343233',
        street_adress: 'some adress 4',
        postal_code: 29166,
        logo_url: 'http://davidnaylor.org/temp/firefox-logo-200x200.png',
        website: 'goodcompany4.com',
        country_id: 4,
        city_id: 4,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date() 
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      
      return queryInterface.bulkDelete('Companies', null, {});
    
  }
};
