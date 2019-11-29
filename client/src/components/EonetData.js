import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading.js";
import "../styles/Eonet.scss";

function EonetDataComponent(props) {
  useEffect(() => {
    const getMedia = async () => {
      // await axios
      //   .get(props.href)
      //   .then(function(response) {
      //     console.log("set media response", response.data[0]);
      //     setMedia(response.data[0]);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      // });
    };
    getMedia();
  });

  return (
    <div className="container">
      <div className="container_body">
        <div className="container_title">
          <h1>{props.data.title}</h1>
        </div>
        <div className="container_explanation">
          <p>{props.data.date}</p>
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EonetDataComponent;
