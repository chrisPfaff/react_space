import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchDataComponent.scss";

function SearchDataComponent(props) {
  const [media, setMedia] = useState("");
  const mediaType = props.data.media_type;

  const chooseDisplay = () => {
    console.log("choose display is working");
    if (mediaType === null) {
      // suspense?
      return <Loading />;
    } else if (mediaType === "video") {
      return (
        <iframe
          className="container_iframe"
          src={media}
          frameborder="0"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      );
    } else {
      return <img className="container_image" src={media} alt="nasa space" />;
    }
    // <Suspense fallback={<Loading />}>
    //   this.chooseDisplay()
    // </Suspense>
  };

  const handleClick = e => {
    e.preventDefault();
    const parentTarget = e.currentTarget.parentNode;
    let parentTarget2 = parentTarget.parentNode;
    let classCheck = parentTarget2.parentNode;
    if (classCheck.classList.contains("active")) {
      classCheck.classList.remove("active");
    } else {
      console.log(classCheck);
      classCheck.classList.add("active");
    }
  };

  useEffect(() => {
    const getMedia = async () => {
      await axios
        .get(props.href)
        .then(function(response) {
          console.log("set media response", response.data[0]);
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
      <div className="container_body">
        <div className={`container_title`}>
          <h1>{props.data.title}</h1>
          <FontAwesomeIcon
            onClick={handleClick}
            className="container_button"
            icon={faCaretDown}
            className="container_icon"
          />

          {/* <span onClick={handleClick} className="container_button">
            <FontAwesomeIcon icon={faCaretDown} className="container_icon" />
          </span> */}
        </div>
        <div>{chooseDisplay()}</div>
        <div className="container_explanation">
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchDataComponent;
