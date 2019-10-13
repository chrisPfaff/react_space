import React, { useState, useEffect } from "react";
import axios from "axios";

function Home(props) {
  const [image, getImage] = useState(null);

  console.log(image);

  const url =
    "https://api.nasa.gov/planetary/apod?api_key=raP0qIkThJJqXBjcPypF4LNUhEnHUndMyyeYczup";

  const fetchData = data => {
    getImage(data);
  };

  useEffect(() => {
    axios
      .get(url)
      .then(function(response) {
        fetchData(response.data.url);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  return (
    <div className="Home">
      <div className="Home_body">
        <img src={image} alt="nasa space" />
      </div>
    </div>
  );
}

export default Home;
