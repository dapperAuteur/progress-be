const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  // const io = req.app.get('socketio');
  // let users;
  // io.sockets.on('connection', socket => {
  //   console.log('New connection: ', socket.id);
  //   socket.on('Users', data => {
  //     users = data;
  //     console.log(data);
  //   });
  // });
  // res.send(users);
});

module.exports = router;
