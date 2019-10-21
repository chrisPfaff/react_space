import React, { useState, useEffect } from "react";
import Loading from "./Loading.js";
import axios from "axios";
import "../styles/Home.scss";

function Home(props) {
  const [image, getImage] = useState(null);
  const [explanation, getExplanation] = useState(null);
  const [title, getTitle] = useState(null);

  const fetchData = (img, description, title) => {
    getImage(img);
    getExplanation(description);
    getTitle(title);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:8080/getimage")
        .then(function(response) {
          console.log(response.data);
          fetchData(
            response.data.url,
            response.data.explanation,
            response.data.title
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    getData();
  });

  return (
    <div className="Home">
      <h1 className="Home_heading hover">Home</h1>
      <div className="Home_body">
        {image ? (
          <img className="Home_image" src={image} alt="nasa space" />
        ) : (
          <Loading />
        )}
        <div className="Home_title">
          <h2 className="Home_heading">{title}</h2>
        </div>
      </div>
      <p className="Home_explanation">{explanation}</p>
    </div>
  );
}

export default Home;
