import React from "react";
import "./HomeDropdown.css";
import Avatar from "../../images/userAvatar.png";
import { HiMoon } from "react-icons/hi";
import { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Dropdown = () => {
  const navigate = useNavigate();
  const [DarkThemeOn, SetDarkThemeOn] = useState(false);
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    SetDarkThemeOn(true);
  };
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    SetDarkThemeOn(false);
  };

  return (
    <div className="OptionDiv">
      <div className="OptionOne">
        <p className="OptionHedding">ACCOUNT</p>
        <div className="AvatarDiv1">
          <img src={Avatar} className="AvatarDropdown"></img>
        </div>
      </div>
      <div className="OptionTwo">
        <p className="OptionHedding">SETTINGS</p>
        <div className="Mode" onClick={() => navigate("/profile")}>
          Personal Settings
        </div>
        <div className="All">
          <div
            className="Mode"
            onClick={() => {
              DarkThemeOn ? setLight() : setDark();
            }}
          >
            {DarkThemeOn ? (
              <BsFillSunFill className="SunIcon"></BsFillSunFill>
            ) : (
              <HiMoon className="MoonIcon" />
            )}
            {DarkThemeOn ? (
              <p className="modeText">Light Mode</p>
            ) : (
              <p className="modeText">Dark Mode</p>
            )}
          </div>
        </div>
      </div>
      <div className="SignInDiv" onClick={() => navigate("/admin/products")}>
        <p>Admin Pannel</p>
      </div>
      <div className="SignInDiv" onClick={() => navigate("/login")}>
        <p>Sign In</p>
      </div>
    </div>
  );
};
export default Dropdown;
