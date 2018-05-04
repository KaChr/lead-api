'use strict';
/*module.exports = (sequelize, DataTypes) => {
  var Listings = sequelize.define('Listings', {
    title: DataTypes.STRING(50),
    pub_date: DataTypes.DATEONLY,
    information: DataTypes.TEXT,
    intern_amount: DataTypes.INTEGER,
    profile_company_id: DataTypes.INTEGER,
    timestamp: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Listings;
};*/

export default (sequelize, DataTypes) => {
  const Listings = sequelize.define('Listings', {
    title: DataTypes.STRING(50),
    pub_date: DataTypes.DATEONLY,
    information: DataTypes.TEXT,
    intern_amount: DataTypes.INTEGER,
    profile_company_id: DataTypes.INTEGER,
    timestamp: DataTypes.DATE
  })

  Listings.associate = (models) => {
      // associations can be defined here
      /**
       * Listings.belongsTo(models.Company)
       */
  };

  return Listings;
}