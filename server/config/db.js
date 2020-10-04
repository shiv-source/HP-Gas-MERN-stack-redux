const mongoose = require("mongoose");
const ENV = require("../config/env");
const envConfig = require('./environment');
const dbURL = envConfig();


const dbConnection = async () => {
  try {
    await mongoose
      .connect(dbURL, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database is connected successfully.");
      });
  } catch (err) {
    throw err;
  }
};

module.exports = dbConnection();
