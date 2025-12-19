const express = require("express");
const cors = require("cors");
const api = require("./routes/api");

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://swoo.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // ❗ DO NOT throw an error — just block
      return callback(null, false);
    },
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", api);

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

module.exports = app;
