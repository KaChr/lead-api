'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Listings', [{
        title: 'company1',
        pub_date: new Date(),
        information_listing: 'bla bla ba 1. bla bla ba 1. bla bla ba 1. bla bla ba 1. bla bla ba 1. bla bla ba 1.',
        intern_amount: 3,
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'company2',
        pub_date: new Date(),
        information_listing: 'bla bla ba 2. bla bla ba 2. bla bla ba 2. bla bla ba 2. bla bla ba 2. bla bla ba 2.',
        intern_amount: 3,
        company_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'company3',
        pub_date: new Date(),
        information_listing: 'bla bla ba 3. bla bla ba 3. bla bla ba 3. bla bla ba 3. bla bla ba 3. bla bla ba 3.',
        intern_amount: 2,
        company_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'company4',
        pub_date: new Date(),
        information_listing: 'bla bla ba 4. bla bla ba 4. bla bla ba 4. bla bla ba 4. bla bla ba 4. bla bla ba 4.',
        intern_amount: 5,
        company_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'company5',
        pub_date: new Date(),
        information_listing: 'bla bla ba 5. bla bla ba 5. bla bla ba 5. bla bla ba 5. bla bla ba 5. bla bla ba 5.',
        intern_amount: 23,
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'company6',
        pub_date: new Date(),
        information_listing: 'bla bla ba 6. bla bla ba 6. bla bla ba 6. bla bla ba 6. bla bla ba 6. bla bla ba 6.',
        intern_amount: 9,
        company_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

      
       

  down: (queryInterface, Sequelize) => {
    
      Example:
      return queryInterface.bulkDelete('Listings', null, {});
    
    }
  }
};
