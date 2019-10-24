import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchDataComponent from "./SearchData.js";
import "../styles/Search.scss";

function Search(props) {
  const [dataArr, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const fetchData = data => {
    setData(data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const getData = async () => {
      await axios
        .get(`http://localhost:8080/search?data=${searchData}`)
        .then(function(response) {
          console.log("response", response);
          fetchData(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    getData();
    setSearchData("");
  };

  const handleChange = e => {
    setSearchData(e.target.value);
  };

  return (
    <div className="Search">
      <div className="Search_container">
        <h1 className="Search_heading hover">Search</h1>
        <p>Use NASA's Search API</p>
        <form onSubmit={handleSubmit} className="Search_form">
          <label>
            Search
            <input
              onChange={handleChange}
              type="search"
              name="search"
              id="search"
              placeholder={searchData}
            />
            <input type="submit" value="submit" />
          </label>
        </form>
        <SearchDataComponent />
      </div>
    </div>
  );
}

export default Search;
