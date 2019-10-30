import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Eonet.scss";

function Eonet(props) {
  const [eonetData, setData] = useState([]);

  useEffect(() => {
    const getEonetData = async () => {
      await axios
        .get("http://localhost:8080/eonet")
        .then(function(response) {
          setData(response.data.events[0].sources[0].url);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    getEonetData();
  });

  console.log(eonetData);
  return (
    <div className="eonet">
      <h1 className="eonet_title">Eonet</h1>
      <h2 className="eonet_title">
        Earth Observatory Natural Event Tracker (EONET)
      </h2>
      <iframe className="eonet_iframe" src={eonetData} frameborder="0"></iframe>
    </div>
  );
}

export default Eonet;
