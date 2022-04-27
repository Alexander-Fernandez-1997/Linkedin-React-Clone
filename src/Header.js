import React from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import {
  BusinessCenter,
  Chat,
  Menu,
  Notifications,
  SupervisorAccount,
} from "@material-ui/icons";
import { HeaderOption } from "./HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

export const Header = () => {
  const toggleMenu = (e) => {
    e.preventDefault();
    let x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header topnav">
      <div className="header_left">
        <img src="https://i.imgur.com/2hiehp3.png"></img>

        <div className="header_search">
          <SearchIcon></SearchIcon>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <a href="" onClick={toggleMenu} className="icon">
        <Menu />
      </a>
      <div className="header_right" id="myLinks">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption onClick={logoutOfApp} title="me" avatar={"avatar"} />
      </div>
    </div>
  );
};
