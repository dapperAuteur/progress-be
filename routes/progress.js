const express = require("express");
const router = express.Router();
const { Admin, validate } = require("../models/admin");

router.post("/", async (req, res) => {
  const admin = await Admin.find({ username: req.body.username });

  if (admin.length < 1) {
    return res.status(400).json({ error: "Invalid Admin" });
  }
  res.render("progress-admin", { admin: admin[0].username });
});

module.exports = router;
