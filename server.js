const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.get("/working", (req, res) => {
  res.send("workings");
});

app.listen(process.env.PORT || port, () => {
  console.log(`app is listening on port ${port}`);
});
