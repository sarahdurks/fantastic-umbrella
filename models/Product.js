// Product Model

// Dependency
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Prouduct class extension
class Product extends Model { }

// Product model set up
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: { isNumeric: true }

    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product'
  }
);

module.exports = Product;

/* Requirements:
Product
id
  - Integer
  - Doesn't allow null values
  - Set as primary key
  - Uses auto increment

product_name
  - String
  - Doesn't allow null values

price
  - Decimal
  - Doesn't allow null values
  - Validates that the value is a decimal

stock
  - Integer
  - Doesn't allow null values
  - Set a default value of 10
  - Validates that the value is numeric

category_id
  - Integer
  - References the category model's id */