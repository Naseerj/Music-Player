import React from "react";
import logo from "./Images/logo (2).svg";
import Home from "./Images/Vector.svg";
import Musiclibrary from "./Images/music-library-2.svg";
import Collection from "./Images/Vector1.svg";
import Radio from "./Images/radio.svg";
import Profile from "./Images/Vector3.png";
import Logout from "./Images/Logout.svg";
import Net from "./Images/Vector (10).png";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="section1">
      {/* Importing icons using figma */}

      <div className="firstdiv">
        <img src={logo} alt="" />
        <input className="inp1" type="text" placeholder="Search artists" />
      </div>
      <div className="parentdiv">
        <div>
        <div className="icondiv">
          <img src={Home} alt="" />
          <img src={Musiclibrary} alt="" />
          <img src={Collection} alt="" />
          <img src={Radio} alt="" />
        </div>
        <div className="icon2div">
          <img src={Radio} alt="" />
          <img src={Logout} alt="" />
        </div>
        </div>
        <div className="picturediv">
          <img className="net" src={Net} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
