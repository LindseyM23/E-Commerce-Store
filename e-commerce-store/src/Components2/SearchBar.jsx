import React from "react";
import "../styles/SearchBar.css";


function SearchBar(){
    return(
        <div className="dashboard">
        <div className="top-bar">
        <div className="label-1">
          <span className="label">
            Search Item
          </span>
        </div>
        <div className="input-field">
          <span className="placeholder">
            <input type="text" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."/>
          </span>
        </div>
      </div>
      </div>
    );
}





export default SearchBar;