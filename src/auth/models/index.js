'use strict'

const { Sequelize, DataTypes } = require('sequelize');


const Users = require('./users-model');

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports={
  sequelize
}