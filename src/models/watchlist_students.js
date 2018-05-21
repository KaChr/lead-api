'use strict';
module.exports = (sequelize, DataTypes) => {
  var watchlist_students = sequelize.define('watchlist_students', {
    company_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        watchlist_students.belongsTo(models.Companies, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        watchlist_students.belongsTo(models.Students, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return watchlist_students;
};