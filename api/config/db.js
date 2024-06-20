require("dotenv").config()
const mongoose = require("mongoose")
const connection = () => {
    mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("MongoDB is Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

  module.exports =connection