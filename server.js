'use strict'

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

module.exports = {server:app, start: port => app.listen(port, () => console.log('server is running') ) };


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

// sequelize.sync()
//   .then(() => {
//     app.listen(3000, () => console.log('server up'));
//   }).catch(e => {
//     console.error('Could not start server', e.message);
//   });


// app.post('/signin', async (req, res) => {

  // let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  // let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  // let decodedString = base64.decode(encodedString); // "username:password"
  // let [username, password] = decodedString.split(':'); // username, password

//   try {
//     const user = await Users.findOne({ where: { username: username } });
//     const valid = await bcrypt.compare(password, user.password);
//     if (valid) {
//       res.status(200).json(user);
//     }
//     else {
//       throw new Error('Invalid User')
//     }
//   } catch (error) { res.status(403).send("Invalid Login"); }

// });

// start script

