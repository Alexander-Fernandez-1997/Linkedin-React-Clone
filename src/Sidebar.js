import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Alexander</h2>
        <h4>alex97l@hotmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,448</p>
        </div>
      </div>
    </div>
  );
};
