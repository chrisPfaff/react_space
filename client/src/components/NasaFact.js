import React, { useState, useEffect } from "react";
import Loading from "./Loading.js";
import axios from "axios";
import "../styles/NasaFact.scss";

function Fact(props) {
  const [image, setImage] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [title, setTitle] = useState(null);
  const [media, setMediaType] = useState("");

  const fetchData = (img, description, title, media) => {
    setImage(img);
    setExplanation(description);
    setTitle(title);
    setMediaType(media);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/getImage")
        .then(function(response) {
          fetchData(
            response.data.url,
            response.data.explanation,
            response.data.title,
            response.data.media_type
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    getData();
  });

  const chooseDisplay = () => {
    if (image === null) {
      return <Loading />;
    } else if (media === "video") {
      return (
        <iframe
          className="Home_iframe"
          src={image}
          frameborder="0"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      );
    } else {
      return <img className="Home_image" src={image} alt="nasa space" />;
    }
  };

  return (
    <div className="Home">
      <h1 className="Home_heading hover">
        A.P.O.D (Astronomy Picture of The Day)
      </h1>
      <div className="Home_body">
        {chooseDisplay()}
        <div className="Home_title">
          <h2 className="Home_heading">{title}</h2>
        </div>
      </div>
      <p className="Home_explanation">{explanation}</p>
    </div>
  );
}

export default Fact;
