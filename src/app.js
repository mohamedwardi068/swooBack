const express = require("express");
const cors = require("cors");
const api = require("./routes/api");

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
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
