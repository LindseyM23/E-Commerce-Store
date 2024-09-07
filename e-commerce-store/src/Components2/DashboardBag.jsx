import React from "react";
import "../styles/DashboardBag.css";
import { useSelector } from 'react-redux';

function DashboardBag() {
    const bagItems = useSelector((state) => state.bag.items);

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
              onError={(e) => { e.target.src = 'path_to_placeholder_image.png'; }} // Fallback if image fails
            />
          ))
        ) : (
          <p>Your bag is empty.</p>
        )}
      </div>
    </div>


            {/* <div className="bag-header">
                <span className="bag-title">Bag</span>
            </div>
            <div className="bag-items">
                <div className="bag-items-row">
                    <div className="bag-item">
                        <div className="item-image image-8"></div>
                    </div>
                    <div className="bag-item">
                        <div className="item-image image-9"></div>
                    </div>
                    <div className="bag-item">
                        <div className="item-image image-10"></div>
                    </div>
                </div>
                <div className="bag-items-row">
                    <div className="bag-item">
                        <div className="item-image image-11"></div>
                    </div>
                </div>
            </div> */}
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