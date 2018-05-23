'use strict';

export default (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    first_name: DataTypes.STRING(50),
    last_name: DataTypes.STRING(50),
    age: DataTypes.INTEGER,
    phone: DataTypes.STRING(50),
    street_adress: DataTypes.STRING(50),
    social_security_number: DataTypes.STRING(50),
    country_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      unique: true
    }
  });

  Students.associate = (models) => {
    // console.log(models.User);
    // associations can be defined here
    /**
     * Listings.belongsTo(models.Company)
     */
    Students.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        name: 'user_id',
        allowNull: false
      }
    });

    Students.belongsTo(models.cities);
    Students.belongsTo(models.countries);

    Students.hasMany(models.watchlist_students);
    Students.hasMany(models.profile_schools);
    Students.hasOne(models.Profile_students);
  };

  return Students;
};