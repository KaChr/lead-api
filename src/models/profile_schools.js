'use strict';
module.exports = (sequelize, DataTypes) => {
  var profile_schools = sequelize.define('profile_schools', {
    school_id: DataTypes.INTERGER,
    student_id: DataTypes.INTERGER,
    verify: DataTypes.BOOLEAN,
    timestamp: DataTypes.DATETIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return profile_schools;
};