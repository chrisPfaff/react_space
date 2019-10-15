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

app.get("/getEpic", (req, res) => {
  const apiKey = process.env.API_KEY;

  axios
    .get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`)
    .then(response => {
      res.send(response.data);
    });
});

app.listen(process.env.PORT || port, () => {
  console.log(`app is listening on port ${port}`);
});
