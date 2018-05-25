'use strict';
module.exports = (sequelize, DataTypes) => {
  var Link_students_profiles_connection = sequelize.define('Link_students_profiles_connection', {
    profile_student_id: DataTypes.INTEGER,
    link_student_profile_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Link_students_profiles_connection.belongsTo(models.Profile_students, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Link_students_profiles_connection.belongsTo(models.Link_students_profiles, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Link_students_profiles_connection;
};