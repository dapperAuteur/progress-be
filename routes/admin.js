var express = require('express');
var router = express.Router();
const { Admin, validate } = require('../models/admin');

router.post('/', async (req, res, next) => {
  const { username, password } = req.body;

  let admin = await Admin.findOne({ username });
  if (admin) return res.status(400).json({ message: 'Admin already exists' });

  admin = new Admin({
    username,
    password
  });

  await admin.save();

  const token = admin.generateToken();
  res
    .status(200)
    .header('admin_token', token)
    .json({ token });
});

module.exports = router;
