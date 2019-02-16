const mongoose = require("mongoose");
const config = require("config");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  }
});

adminSchema.methods.generateToken = function() {
  const token = jwt.sign(
    {
      username: this.username
    },
    config.get("jwt")
  );

  return token;
};

const validateAdmin = user => {
  const schema = {
    username: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(user, schema);
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports.validate = validateAdmin;
module.exports.Admin = Admin;
