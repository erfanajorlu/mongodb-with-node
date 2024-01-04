const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongoproject")
  .then(() => {
    console.log("connect to mongo...");
  })
  .catch((err) => {
    console.log('can not connected....')
  });
