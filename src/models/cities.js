'use strict';
module.exports = (sequelize, DataTypes) => {
  var cities = sequelize.define('cities', {
    city_name: DataTypes.STRING(50),
    timestamp: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cities;
};