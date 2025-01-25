import React, { useState } from "react";
import "./Darkmode.css";
import logo_light from "/public/logo-black.png";
import logo_dark from "/public/logo-white.png";
import search_icon_light from "/public/search-w.png";
import search_icon_dark from "/public/search-b.png";
import toogle_light from "/public/night.png";
import toogle_dark from "/public/day.png";

function Darkmode() {
  return (
    <div className="navbar">
        
      <img src={logo_light} alt="" className="logo" />

      <ul>
        <li>Home</li>
        <li>Setting</li>
        <li>About</li>
        <li>Features</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={search_icon_light}
          alt="Search Icon"
          className="search-icon"
        />
      </div>
      <img
        src={toogle_light}
        alt="Toggle Icon"
        className="toggle-icon"
      />
    </div>
  );
}

export default Darkmode;
