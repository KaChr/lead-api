'use strict';

export default (sequelize, DataTypes) => {
  const Listings = sequelize.define('Listings', {
    title: DataTypes.STRING(50),
    pub_date: DataTypes.DATE,
    information_listing: DataTypes.TEXT,
    intern_amount: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER
  })

  Listings.associate = (models) => {
      // associations can be defined here
      /**
       * Listings.belongsTo(models.Company)
       */

    Listings.belongsTo(models.Companies, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });      
  };

  return Listings;
}