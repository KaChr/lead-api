'use strict';
module.exports = (sequelize, DataTypes) => {
  var profile_schools = sequelize.define('profile_schools', {
    school_id: DataTypes.INTEGER,
    student_id:  {
      type: DataTypes.INTEGER,
      unique: true
    },
    verify: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        profile_schools.belongsTo(models.Schools, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        profile_schools.belongsTo(models.Students, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return profile_schools;
};