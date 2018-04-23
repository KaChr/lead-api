'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile_students = sequelize.define('Profile_students', {
    name: DataTypes.STRING(50),
    age: DataTypes.INTEGER,
    city_id: DataTypes.INTERGER,
    image_adress: DataTypes.STRING,
    current_school: DataTypes.STRING(50),
    school_length: DataTypes.STRING(50),
    intern_period_start: DataTypes.DATEONLY,
    intern_period_end: DataTypes.DATEONLY,
    description: DataTypes.TEXT,
    knowledge: DataTypes.TEXT,
    education: DataTypes.TEXT,
    timestamp: DataTypes.DATE,
    student_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Profile_students;
};