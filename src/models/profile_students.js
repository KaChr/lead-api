'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile_students = sequelize.define('Profile_students', {
    name: DataTypes.STRING(50),
    age: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    image_adress: DataTypes.STRING,
    current_school: DataTypes.STRING(50),
    school_length: DataTypes.STRING(50),
    intern_period_start: DataTypes.DATE,
    intern_period_end: DataTypes.DATE,
    description: DataTypes.TEXT,
    knowledge: DataTypes.TEXT,
    education: DataTypes.TEXT,
    student_id: {
      type: DataTypes.INTEGER,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Profile_students.belongsTo(models.Students, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Profile_students.belongsTo(models.cities, {
          foreignKey: {
            allowNull: false
          }
        });

        Profile_students.hasMany(models.Link_students_profiles_connections);
      }
    }
  });
  return Profile_students;
};