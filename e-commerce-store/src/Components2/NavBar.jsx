import react from "react";
import "../styles/NavBarStyles.css";


function NavBar (){
  return(
    <div className="dashboard">
    <div className="navbar">
    <div className="nav-links-top">
      <div className="logo">
        <img className="group-1" src="/Assets/Group14_x2.png" alt="navbar-icon" />
      </div>
      <div className="menu-icon">
        <div className="icon">
          <img className="vector-4" src="/Assets/Vector27_x2.png" alt="navbar-icon" />
        </div>
      </div>
      <div className="nav-link">
        <img className="vector-2" src="/Assets/Vector99_x2.png" alt="navbar-icon" />
      </div>
      <div className="nav-link-1">
        <img className="vector-3" src="/Assets/Vector98_x2.png" alt="navbar-icon" />
      </div>
    </div>
    <div className="nav-link-bottom">
      <div className="nav-link-2">
        <img className="vector-5" src="/Assets/Vector97_x2.png" alt="navbar-icon" />
      </div>
    </div>
  </div> 
</div>   
  )

}

export default NavBar;