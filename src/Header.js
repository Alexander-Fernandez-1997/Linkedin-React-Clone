import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import {
  BusinessCenter,
  Chat,
  Notifications,
  SupervisorAccount,
} from "@material-ui/icons";
import { HeaderOption } from "./HeaderOption";

export const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://i.imgur.com/2hiehp3.png"></img>

        <div className="header_search">
          <SearchIcon></SearchIcon>
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://avatars.githubusercontent.com/u/84294307?v=4"
          title="me"
        />
      </div>
    </div>
  );
};
