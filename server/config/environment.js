const ENV = require("../config/env");

const envConfig = () => {
  let productionMode = ENV.PRODUCTION_MODE;
  if (productionMode === "true") {
    dbURL = ENV.REMOTE_DB;
    return dbURL;
  } else {
    dbURL = ENV.LOCAL_DB;
    return dbURL;
  }
};

module.exports = envConfig;
