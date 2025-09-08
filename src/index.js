const express = require("express");
const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.send("All complete setup");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
