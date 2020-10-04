const app = require("./app");
const http = require("http");
const ENV = require("./config/env");

const server = http.createServer(app);

server.listen(ENV.PORT, () => {
  console.log(`server is running at port :${ENV.PORT}`);
});
