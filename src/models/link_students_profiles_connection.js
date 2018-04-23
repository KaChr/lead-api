'use strict';
module.exports = (sequelize, DataTypes) => {
  var Link_students_profiles_connection = sequelize.define('Link_students_profiles_connection', {
    profile_student_id: DataTypes.INTERGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Link_students_profiles_connection;
};