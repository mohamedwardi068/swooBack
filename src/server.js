require("dotenv").config();
const http = require("http");
const app = require("./app");

// DB connection
require("./config/connect");

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
