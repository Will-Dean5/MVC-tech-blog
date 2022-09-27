const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
checkPass(loginPass) {
  return bcrypt.compareSync(loginPass, this.password);
}}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8]
        }
      },
      isOnline: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
  },
  {
  sequelize,
  underscored: true,
  modelName: 'user'
  }
)

module.exports = User;