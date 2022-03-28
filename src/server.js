'use strict'

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

// app.post('/signup', async (req, res) => {
//   let { username, password } = req.body;
//   console.log(username, password);

//   let user = await UserModel.create({username, password});

//   res.status(201).send({
//     user: {id: user.id, username: user.username},
//     token: user.token,
//   });
// });

//app.get to 'read the model'
//app.post to 'create the' model

sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

