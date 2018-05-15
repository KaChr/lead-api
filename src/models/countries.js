'use strict';
module.exports = (sequelize, DataTypes) => {
  var countries = sequelize.define('countries', {
    country_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        countries.hasOne(models.Schools);
        countries.hasOne(models.Students);
        countries.hasOne(models.Companies);
      }
    }
  });
  return countries;
};