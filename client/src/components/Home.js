import React, { useState, useEffect } from "react";
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
    async function getData() {
      await axios
        .get("http://localhost:8080/getimage")
        .then(function(response) {
          console.log(response);
          fetchData(response.data.url, response.data.explanation);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    getData();
  });

  return (
    <div className="Home">
      <div className="Home_body">
        <img className="Home_image" src={image} alt="nasa space" />
      </div>
      <p className="Home_explanation">{explanation}</p>
    </div>
  );
}

export default Home;
