import React, { useEffect, useState } from "react";
import axios from "axios";

function Eonet(props) {
  const [eonetData, setData] = useState([]);

  useEffect(() => {
    const getEonetData = async () => {
      await axios
        .get("http://localhost:8080/eonet")
        .then(function(response) {
          console.log(response.data.events[0].sources[0].url);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    getEonetData();
  });

  console.log(eonetData);
  return (
    <div>
      <h1>Eonet</h1>
      <h2>Earth Observatory Natural Event Tracker (EONET)</h2>
    </div>
  );
}

export default Eonet;
