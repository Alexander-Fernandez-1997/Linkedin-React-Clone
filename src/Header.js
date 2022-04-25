import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { SupervisorAccount } from "@material-ui/icons";
import { HeaderOption } from "./HeaderOption";

export const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <a href="https://imgur.com/2hiehp3">
          <img
            src="https://i.imgur.com/2hiehp3.png"
            title="source: imgur.com"
          />
        </a>
        <div className="header_search">
          <SearchIcon></SearchIcon>
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
      </div>
    </div>
  );
};
