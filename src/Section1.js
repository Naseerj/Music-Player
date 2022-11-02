import React from "react";
import logo from "./Images/logo (2).svg";
import Home from "./Images/Vector.svg";
import Musiclibrary from "./Images/music-library-2.svg";
import Collection from "./Images/Vector1.svg";
import Radio from "./Images/radio.svg";
import Profile from "./Images/Vector3.png";
import Logout from "./Images/Logout.svg";
import Net from "./Images/Vector (13).svg";
import Singer from "./Images/Pexels Photo by Eric Esma.svg";
import Pictures from './Images/Frame 4 (1).svg'
import Likes from './Images/Frame 3.svg'
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
          <h4 className="text1">Curated Playlist</h4>
          <div className="RBdiv">
          <h2>R & B HITS</h2>
          <p className="p1">
            R & B Hits All mine, Lie again, Petty call me everyday, Out of time,
            No love, Bad habit, and so much more
          </p>
          </div>
          <img src={Pictures} alt="" />
          <img src={Likes} alt="" />
          <img className="net" src={Net} alt="" />
          <img className="singer" src={Singer} alt="" />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
