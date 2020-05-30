const mongoose = require("mongoose");

const connect = (dbUrl) => {
  console.log("Connectin to mongodb...");
  mongoose
  .connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {console.log("Connection to mongodb succeed!")},
    err => {console.log("Connection to mongodb failed: error: " + err)}
  )
}

module.exports = { connect }