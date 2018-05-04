'use strict';
module.exports = (sequelize, DataTypes) => {
  var countries = sequelize.define('countries', {
    country_name: DataTypes.STRING,
    timestamp: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return countries;
};