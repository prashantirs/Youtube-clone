import React, { useState } from "react";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="header">
        <div className="header__left">
          <MenuIcon  />
          <Link to="/">
            <img
              className="header__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="YouTube Logo"
            />
          </Link>
        </div>

        <div className="header__center">
          <input
            onChange={searchHandler}
            value={searchInput}
            type="text"
            placeholder="Search"
          />

          <Link to={`/search/${searchInput}`}>
            <SearchIcon className="header__inputButton" fontSize="large" />
          </Link>
        </div>

        <div className="header__right">
          <VideoCallSharpIcon  className="header__icon" />
          <NotificationsIcon  className="header__icon" />
          <Avatar
            className="header__icons"
            src="https://avatars.githubusercontent.com/u/65569156?v=4"
          />
        </div>
    </div>
  );
};

export default Header;
