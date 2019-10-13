import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <img src={image} alt="nasa space" />
        <p>{explanation}</p>
      </div>
    </div>
  );
}

export default Home;
