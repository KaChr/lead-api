'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('cities', [{
        city_name:'Stockholm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city_name:'Uppsala',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        city_name:'Stockholm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city_name:'Linköping',
        createdAt: new Date(),
        updatedAt: new Date()
      
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('cities', null, {});
    
  }
};
