import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Epic.scss";

function Epic(props) {
  const [imageArr, setImages] = useState([]);

  const fetchData = imgs => {
    setImages(imgs);
  };
  console.log(imageArr);
  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:8080/getepic")
        .then(function(response) {
          console.log(response);
          fetchData(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    getData();
  });

  return (
    <div className="Epic">
      <h1>helllo</h1>
      <p>poshsajhdjaksdj hasjdaksjdhjsahd hasjjdjahsjdhsa jasjdsjahdjhsjad</p>
    </div>
  );
}

export default Epic;
