import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchDataComponent from "./SearchData.js";
import Loading from "./Loading.js";
import "../styles/Search.scss";

function Search(props) {
  const [dataArr, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const fetchData = (data) => {
    setData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      await axios
        .get(`/api/search?data=${searchData}`)
        .then(function (response) {
          console.log("response data items", response.data);
          fetchData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getData();
    setSearchData("");
  };

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const generateComponents = () => {
    const mappedData = dataArr.map((item) => {
      return <SearchDataComponent href={item.href} data={item.data[0]} />;
    });
    return mappedData;
  };

  return (
    <div className="Search">
      <div className="Search_container">
        <h2 className="Search_heading hover">Search Images</h2>
        <h2>Use NASA's Search API</h2>
        <form onSubmit={handleSubmit} className="Search_form">
          <label htmlFor="search">
            Search
            <input
              onChange={handleChange}
              type="search"
              name="search"
              id="search"
              placeholder={searchData}
            />
            <input class="Search_button" type="submit" value="submit" />
          </label>
        </form>
      </div>
      {generateComponents()}
    </div>
  );
}

export default Search;
