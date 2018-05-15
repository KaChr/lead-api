'use strict';
module.exports = (sequelize, DataTypes) => {
  var Schools = sequelize.define('Schools', {
    name: DataTypes.STRING(50),
    // email: DataTypes.STRING(50),
    phone: DataTypes.STRING(50),
    street_adress: DataTypes.STRING(50),
    country_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Schools.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Schools.belongsTo(models.cities, {
          foreignKey: {
            allowNull: false
          }
        });

        Schools.belongsTo(models.countries, {
          foreignKey: {
            allowNull: false
          }
        });

        Schools.hasMany(models.profile_schools);
      }
    }
  });
  return Schools;
};