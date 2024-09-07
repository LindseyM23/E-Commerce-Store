import React from "react";
import "../styles/DashboardBag.css";



function DashboardBag({bagItems}) {
    return (
        <div className="bag-area">
<div className="bag-header">
      <h2>Bag</h2>
      <div className="bag-items">
        {bagItems.length > 0 ? (
          bagItems.map((item, index) => (
            <img 
            key={index} 
            src={item} 
            alt={`Bag item ${index}`} 
            width={100} 
              onError={(e) => { e.target.src = 'path_to_placeholder_image.png'; }}
              />
          ))
        ) : (
          <p>Your bag is empty.</p>
        )}
      </div>
      </div>
            <div className="cta">
                <button className="cta-button">
                    <div className="cta-icon">
                        <img className="cta-icon-img" src="Assets/Vector126_x2.png" alt="View Bag Icon" />
                    </div>
                    <span className="cta-text">View Bag</span>
                </button>
            </div>
        </div>
    );
}
export default DashboardBag;