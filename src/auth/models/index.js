'use strict'

const { Sequelize, DataTypes } = require('sequelize');

const userSchema = require('./users-model');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const UserModel = userSchema(sequelize, DataTypes)

module.exports={
  sequelize, UserModel
}