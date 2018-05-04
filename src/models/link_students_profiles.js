'use strict';
module.exports = (sequelize, DataTypes) => {
  var Link_students_profiles = sequelize.define('Link_students_profiles', {
    url: DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Link_students_profiles;
};