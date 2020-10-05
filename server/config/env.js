require("dotenv").config();

const ENV = {
  PORT: 5000,
  LOCAL_DB: process.env.LOCAL_DB,
  REMOTE_DB : process.env.REMOTE_DB,
  JWT_KEY : process.env.JWT_KEY,
  PRODUCTION_MODE : process.env.PRODUCTION_MODE,
};

module.exports = ENV;
