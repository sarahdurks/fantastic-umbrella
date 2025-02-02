
//Category Model

// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Class Category
class Category extends Model { }

Category.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category'
  }
);

module.exports = Category;
/*
Category

id
  - Integer
  - Doesn't allow null values
  - Set as primary key
  - Uses auto increment

category_name
  - String
  - Doesn't allow null values*/