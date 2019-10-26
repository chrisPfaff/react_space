const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());

const axios = require("axios");
const port = 8080;

require("dotenv").config();

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.get("/getimage", (req, res) => {
  const apiKey = process.env.API_KEY;

  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => {
      res.send(response.data);
    });
});

app.get("/search", (req, res) => {
  const apiKey = process.env.API_KEY;
  let query = req.query.data.replace(" ", "+");
  axios
    .get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
    .then(response => {
      res.send(response.data.collection);
    });
});

app.listen(process.env.PORT || port, () => {
  console.log(`app is listening on port ${port}`);
});
