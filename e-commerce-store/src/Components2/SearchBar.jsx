
// import React from "react";
// import "../styles/SearchBar.css";

// function SearchBar() {
//     return (
//         <div className="search-bar-container">
//             <div className="dashboard">
//                 <div className="top-bar">
//                     <div className="label-1">
//                         <span className="label">
//                             Search Item
//                         </span>
//                     </div>
//                     <div className="input-field">
//                         <input type="text" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..." />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default SearchBar;

// import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar() {
  

    // const filterItems = (query) => {
    //     const filtered = items.filter(item =>
    //         item.name.toLowerCase().includes(query.toLowerCase())
    //     );
    //     setFilteredItems(filtered);
    // };

    return (
        <div className="dashboard">
            <div className="top-bar">
                <div className="label-1">
                    <span className="label">Search Item</span>
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                        // value={searchQuery}
                        // onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
