'use strict';

export default (sequelize, DataTypes) => {
  const Listings = sequelize.define('Listings', {
    title: DataTypes.STRING(50),
    pub_date: DataTypes.DATE,
    information: DataTypes.TEXT,
    intern_amount: DataTypes.INTEGER,
    company_id: {
      type: DataTypes.INTEGER,
      unique: true
    }
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