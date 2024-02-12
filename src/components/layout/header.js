import React from "react";
import logo from "./Hard_Rock_Cafe_logo_PNG4.png";

const Header = () => {
  return (
    <div className="header" style={{ textAlign: "left" }}>
      <img
        src={logo}
        alt="Hard Rock Cafe Logo"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
};

export default Header;
