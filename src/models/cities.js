'use strict';
module.exports = (sequelize, DataTypes) => {
  var cities = sequelize.define('cities', {
    city_name: DataTypes.STRING(50)
  }, {
    classMethods: {
      associate: function(models) {
        cities.hasOne(models.Schools);
        cities.hasOne(models.Students);
        cities.hasOne(models.Companies);
        cities.hasOne(models.Profile_students);
      }
    }
  });
  return cities;
};