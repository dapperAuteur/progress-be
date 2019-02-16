const mongoose = require("mongoose");
const config = require("config");

const connect = () => {
  mongoose
    .connect(config.get("dbs"), {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => console.log("Connected To Database"))
    .catch(ex => console.error("Failed to connect to Database", ex));
};

module.exports = connect;
