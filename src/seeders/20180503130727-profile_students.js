'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Profile_students', [{
        city_id: 2,
        image_adress: 'http://someimageadress.com',
        current_school: 'Someschool',
        school_length: '2 år',
        intern_period_start: '2015-05-05',
        intern_period_end: '2017-07-07',
        description: 'Some description here.',
        knowledge: 'Some knowledge here.',
        education: 'Some education here.',
        student_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      
      return queryInterface.bulkDelete('Profile_students', null, {});
    
  }
};
