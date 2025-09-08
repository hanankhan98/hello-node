const express = require("express");
const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.send("hello from the NEW deployment version 2! happy to add the new chnages hanan khan");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
