import React from "react";

const Navbar = () => {
  return (
    <div className="nav-menu">
      <div className="menu-item item-1">
        <a href="#home">
          <i className="fas fa-home"></i>
        </a>
      </div>
      <div className="menu-item item-2">
        <a href="#projects">
          <i className="fas fa-desktop"></i>
        </a>
      </div>
      <div className="menu-item item-3">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kevin-terry-065019134/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="menu-item item-4">
        <i className="far fa-file"></i>
      </div>
    </div>
  );
};

export default Navbar;
