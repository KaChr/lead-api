'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Listings', [{
        title: 'company1',
        pub_date: new Date(),
        information: 'bla bla ba',
        intern_amount: '3',
        company_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'company2',
        pub_date: new Date(),
        information: 'bla bla ba',
        intern_amount: '3',
        company_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'company3',
        pub_date: new Date(),
        information: 'bla bla ba',
        intern_amount: '2',
        company_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'company4',
        pub_date: new Date(),
        information: 'bla bla ba',
        intern_amount: '5',
        company_id: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

      
       

  down: (queryInterface, Sequelize) => {
    
      Example:
      return queryInterface.bulkDelete('Listings', null, {});
    
    }
  }
};
