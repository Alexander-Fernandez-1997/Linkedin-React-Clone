import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./styles/Sidebar.css";

export const Sidebar = () => {
  const { email, name, profilePic } = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://source.unsplash.com/random/?productivity,city"
          alt=""
        />
        <Avatar src={profilePic} className="sidebar_avatar">
          {email[0]}
        </Avatar>
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">1,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">8,644</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("firebase")}
        {recentItem("typescript")}
        {recentItem("rubyonrails")}
      </div>
    </div>
  );
};
