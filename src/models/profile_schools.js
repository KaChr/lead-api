'use strict';
module.exports = (sequelize, DataTypes) => {
  var profile_schools = sequelize.define('profile_schools', {
    school_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    verify: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return profile_schools;
};