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
          setData(response.data.events);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    getEonetData();
  }, []);

  console.log(eonetData);
  return (
    <div className="eonet">
      <h1 className="eonet_title hover">Eonet</h1>
      <h2 className="eonet_title hover">
        Earth Observatory Natural Event Tracker (EONET)
      </h2>
      <div className="eonet_body">
        <select name="eonetSelect" id="eonetSelect" className="eonet_select">
          <option value="6">Drought</option>
          <option value="7">Dust and Haze</option>
          <option value="16">Earthquakes</option>
          <option value="9">Floods</option>
          <option value="14">Landslides</option>
          <option value="19">Manmade</option>
          <option value="15">Sea and Lake Ice</option>
          <option value="10">Severe Storms</option>
          <option value="17">Snow</option>
          <option value="12">Volcanos</option>
          <option value="13">Water Color</option>
          <option value="8">Wildfires</option>
        </select>
      </div>
    </div>
  );
}

export default Eonet;
