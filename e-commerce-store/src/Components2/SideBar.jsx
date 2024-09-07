
import React, { useState } from "react";
import "../styles/SideBarStyles.css";

function SideBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="nav-links-top">
                <div className="logo">
                    <img className="group-1" src="Assets/logoImage.png" alt="Logo" />
                </div>
                <div className="menu-icon" onClick={toggleSidebar}>
                    <div className="icon">
                        <img className="vector-4" src="Assets/Vector27_x2.png" alt="Menu Icon" />
                    </div>
                </div>
                <div className="nav-links">
                    <div className="nav-link">
                        <img className="vector-2" src="Assets/Vector99_x2.png" alt="Store" />
                        {isExpanded && <span className="nav-text">Store</span>}
                    </div>
                    <div className="nav-link">
                        <img className="vector-3" src="Assets/Vector126_x2.png" alt="Cart" />
                        {isExpanded && <span className="nav-text">Cart</span>}
                    </div>
                </div>
            </div>
            <div className="nav-link-bottom">
                <div className="nav-link-2">
                    <img className="vector-5" src="Assets/Vector97_x2.png" alt="Nav Link 3" />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
