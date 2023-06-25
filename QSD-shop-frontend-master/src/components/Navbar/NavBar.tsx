import React from "react";
import { useState } from "react";
import Logo from "../../images/qsd_logo.png";
import userAvatar from "../../images/userAvatar.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./NavBar.css";
import HomeDropdown from "../HomeDropdown/HomeDropdown";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  function handleButtonClick() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="navbar">
      <ul className="list">
        <li className="listItem">
          <img src={Logo} className="LogoImage"></img>
        </li>

        <li className="listItem">
          <a className="link" onClick={() => navigate("shop/all")}>
            WOMEN
          </a>
        </li>

        <li className="listItem">
          <a className="link" onClick={() => navigate("shop/all")}>
            MEN
          </a>
        </li>

        <li className="listItem">
          <a className="link" onClick={() => navigate("shop/all")}>
            CHILDREN
          </a>
        </li>

        <li className="listItem">
          <a className="link" href="#">
            ALL
          </a>
        </li>
      </ul>
      <div className="AvatarDiv">
        <HiOutlineShoppingBag className="shoppingBag"></HiOutlineShoppingBag>
        <button className="AvatarButton" onClick={handleButtonClick}>
          <img src={userAvatar} alt="" className="Avatar" />
        </button>
      </div>
      {showDropdown && <HomeDropdown />}
    </div>
  );
};

export default Navbar;
