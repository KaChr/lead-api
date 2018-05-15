'use strict';

export default (sequelize, DataTypes) => {
// module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('Companies', {
    name: DataTypes.STRING(50),
    information: DataTypes.TEXT,
    phone: DataTypes.STRING(50),
    street_adress: DataTypes.STRING(50),
    postal_code: DataTypes.INTEGER,
    logo_url: DataTypes.STRING(50),
    website: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  });

  Companies.associate = (models) => {
    // associations can be defined here
    /**
     * Listings.belongsTo(models.Company)
     */
  };

  return Companies;
};