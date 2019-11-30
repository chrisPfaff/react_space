import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading.js";
import moment from "moment";
import "../styles/Eonet.scss";

function EonetDataComponent(props) {
  console.log(props.data);
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
    <div className="eonet_container">
      <div className="eonet_container_body">
        <div className="eonet_container_title">
          <h1>{props.data.title}</h1>
        </div>
        <div className="eonet_container_explanation">
          <p>
            Date Event Closed:
            <span className="eonet_container_date">
              {moment(props.data.closed)
                .utc()
                .format("MM/DD/YYYY")}
            </span>
          </p>
          <div className="eonet_container_link">
            <iframe src={props.data.sources[0].url} frameborder="0"></iframe>
          </div>
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EonetDataComponent;
