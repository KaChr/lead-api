'use strict';
module.exports = (sequelize, DataTypes) => {
  var cities = sequelize.define('cities', {
    city_name: DataTypes.STRING(50),
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cities;
};