const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class newPost extends Model {}

newPost.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  post_id: {
    references: {
      model: 'post',
      key: 'id'
    }
  }
});