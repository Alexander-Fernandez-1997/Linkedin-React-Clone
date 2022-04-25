import React from "react";
import "./HeaderOption.css";
export const HeaderOption = ({ Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      <h3 className="title">{title}</h3>
    </div>
  );
};
