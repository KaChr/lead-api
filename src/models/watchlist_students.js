'use strict';
module.exports = (sequelize, DataTypes) => {
  var watchlist_students = sequelize.define('watchlist_students', {
    company_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    timestamp: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return watchlist_students;
};