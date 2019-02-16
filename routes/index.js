var express = require("express");
var router = express.Router();
const { Admin, validate } = require("../models/admin");

router.post("/", (req, res, next) => {
  const { username } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const admin = new Admin({
    username
  });

  admin.save();

  res.status(200).json(admin);
});

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
