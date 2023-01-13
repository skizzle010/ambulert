const express = require("express");
const firebase = require("./firebase");
require("dotenv").config();

const app = express();

console.log(firebase);
app.listen(5000, () => {
  console.log("api is running on port 5000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
