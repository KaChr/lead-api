'use strict';

export default (sequelize, DataTypes) => {
// module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    first_name: DataTypes.STRING(50),
    last_name: DataTypes.STRING(50),
    // email: DataTypes.STRING(50),
    phone: DataTypes.STRING(50),
    street_adress: DataTypes.STRING(50),
    social_security_number: DataTypes.STRING(50),
    country_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      unique: true
    }
  }/*, {underscored: true}*/);

  Students.associate = (models) => {
    // console.log(models.User);
    // associations can be defined here
    /**
     * Listings.belongsTo(models.Company)
     */
    Students.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    Students.belongsTo(models.cities, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    Students.belongsTo(models.countries, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    Students.hasMany(models.watchlist_students);

    Students.hasMany(models.profile_schools);

    Students.hasOne(models.Profile_students);
  };

  return Students;
};