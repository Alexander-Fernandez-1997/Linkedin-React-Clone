import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

export const Sidebar = () => {
  const { email, name, profilePic, uid } = useSelector(selectUser);
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
          src="https://media-exp1.licdn.com/dms/image/C4D16AQEPyMqKooyQFQ/profile-displaybackgroundimage-shrink_350_1400/0/1650439743263?e=2147483647&v=beta&t=ch-XgzvvpN0LF8uzAihWPZBZBbMNjWvEXOnLciBSqy0"
          alt=""
        />
        <Avatar src={profilePic} className="sidebar_avatar">
          {name[0]}
        </Avatar>
        <h2>{name}</h2>
        <h4>{email}</h4>
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
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("vue")}
        {recentItem("ruby")}
        {recentItem("rubyonrails")}
      </div>
    </div>
  );
};
