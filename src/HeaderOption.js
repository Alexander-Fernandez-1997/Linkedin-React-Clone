import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";
export const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar}></Avatar>}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};
