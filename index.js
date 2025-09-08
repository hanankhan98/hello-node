const express = require("express");
const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.send("✅ Hello from the NEW deployment version 2!");
});

// Health-check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Service is healthy 🚀" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
