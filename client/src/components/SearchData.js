import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading.js";
import "../styles/SearchDataComponent.scss";

function SearchDataComponent(props) {
  console.log(props);
  const [media, setMedia] = useState("");
  const mediaType = props.data.media_type;

  const chooseDisplay = () => {
    if (mediaType === null) {
      return <Loading />;
    } else if (mediaType === "video") {
      return (
        <iframe
          src={media}
          frameborder="0"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      );
    } else {
      return <img src={media} alt="nasa space" />;
    }
  };

  useEffect(() => {
    const getMedia = async () => {
      await axios
        .get(props.href)
        .then(function(response) {
          console.log(response.data[0]);
          setMedia(response.data[0]);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    getMedia();
  });

  return (
    <div className="container">
      <div className="container_title">
        <h1>{props.data.title}</h1>
      </div>
      <div className="container_media">{chooseDisplay()}</div>
      <div className="container_body">
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}

export default SearchDataComponent;
