'use strict'

require('dotenv').config();

const app = require('./server');

const PORT = process.env.PORT || 3000;

const sequelize = require("./src/auth/models/index");


// ensure tables are created

sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });