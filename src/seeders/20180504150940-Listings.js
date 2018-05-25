'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Listings', [{
        title: 'Backend',
        pub_date: new Date(),
        information_listing: 'söker java..',
        intern_amount: 3,
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'Frontend',
        pub_date: new Date(),
        information_listing: 'duktig fr..',
        intern_amount: 3,
        company_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'Javascript',
        pub_date: new Date(),
        information_listing: 'sökes..',
        intern_amount: 2,
        company_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'Angular',
        pub_date: new Date(),
        information_listing: 'snabb utv..',
        intern_amount: 5,
        company_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'React',
        pub_date: new Date(),
        information_listing: 'Stresstålig..',
        intern_amount: 23,
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'NodeJS',
        pub_date: new Date(),
        information_listing: 'Grym back..',
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
