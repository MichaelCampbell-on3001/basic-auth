'use strict'

const { Sequelize, DataTypes } = require('sequelize');


const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

const sequelize = new Sequelize(process.env.DATABASE_URL);