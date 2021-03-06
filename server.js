const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var cors = require("cors");

//concurrently command  // "start": "concurrently --kill-others \"npm run client\" \"npm run server\"",

const app = express();
app.use(cors());

const axios = require("axios");
const port = 8080;

require("dotenv").config();

app.use(express.static(path.join(__dirname, "./build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.get("/api/getimage", (req, res) => {
  //const apiKey = process.env.API_KEY;
  //hide api key
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=raP0qIkThJJqXBjcPypF4LNUhEnHUndMyyeYczup`
    )
    .then((response) => {
      res.send(response.data);
    });
});

app.get("/api/search", (req, res) => {
  console.log("query", req.query.data);
  let query = req.query.data.replace(" ", "+");
  axios
    .get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
    .then((response) => {
      let data = response.data.collection.items.slice(0, 10);
      res.send(data);
    });
});

app.get("/api/eonet", (req, res) => {
  const query = req.query.data;
  //console.log(query);
  axios
    .get(
      `https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/${query}?limit=8&status=closed`
    )
    .then((response) => {
      //console.log(response.data); limit may not work
      res.send(response.data);
    });
});

app.listen(process.env.PORT || port, () => {
  console.log(`app is listening on port ${port}`);
});
