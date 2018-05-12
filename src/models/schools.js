'use strict';
module.exports = (sequelize, DataTypes) => {
  var Schools = sequelize.define('Schools', {
    name: DataTypes.STRING(50),
    // email: DataTypes.STRING(50),
    phone: DataTypes.STRING(50),
    street_adress: DataTypes.STRING(50),
    country_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Schools;
};