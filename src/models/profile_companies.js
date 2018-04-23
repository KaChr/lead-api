'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile_companies = sequelize.define('Profile_companies', {
    name: DataTypes.STRING(50),
    information: DataTypes.TEXT,
    adress: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    email: DataTypes.STRING(50),
    website: DataTypes.STRING,
    company_id: DataTypes.INTEGER,
    timestamp: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Profile_companies;
};