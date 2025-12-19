const express = require("express");
const cors = require("cors");
const api = require("./routes/api");

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:3000", // for local dev
  "https://swoo.vercel.app/" // your Vercel frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow server-to-server or Postman requests
      if (!allowedOrigins.includes(origin)) {
        const msg = "CORS policy does not allow access from this origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/v1", api);

// Health check (useful for Render/Railway)
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

module.exports = app;
