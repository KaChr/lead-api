'use strict';
module.exports = (sequelize, DataTypes) => {
  var Link_students_profiles = sequelize.define('Link_students_profiles', {
    url: DataTypes.VARCHAR,
    timestamp: DataTypes.DATETIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Link_students_profiles;
};