import React, { useState, useEffect } from "react";
import Loading from "./Loading.js";
import axios from "axios";
import "../styles/Home.scss";

function Home(props) {
  const [image, getImage] = useState(null);
  const [explanation, getExplanation] = useState(null);

  const fetchData = (img, description) => {
    getImage(img);
    getExplanation(description);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:8080/getimage")
        .then(function(response) {
          fetchData(response.data.url, response.data.explanation);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    getData();
  });

  return (
    <div className="Home">
      <h1 className="Home_heading">Home</h1>
      <div className="Home_body">
        {image ? (
          <img className="Home_image" src={image} alt="nasa space" />
        ) : (
          <Loading />
        )}
      </div>
      <h2 className="Home_heading">Description</h2>
      <p className="Home_explanation">{explanation}</p>
    </div>
  );
}

export default Home;
