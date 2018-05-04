'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING(50),
    last_name: DataTypes.STRING(50),
    email: DataTypes.STRING(50),
    phone: DataTypes.STRING(50),
    street_adress: DataTypes.STRING(50),
    social_security_number: DataTypes.STRING(50),
    timestamp: DataTypes.DATE,
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
  return Students;
};