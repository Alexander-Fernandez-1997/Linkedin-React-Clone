import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./styles/Widgets.css";

export const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_article_left">
        <FiberManualRecord />
      </div>
      <div className="widgets_article_right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("New feature: LinkedIn for Work", "Learn more now")}
      {newsArticle(
        "Mechanic receives first payment in Bitcoin to mend Lamborghini",
        "Learn more now"
      )}
      {newsArticle(
        "Crypto advocate mounts challenge to longtime Silicon Valley Congresswoman",
        "Learn more now"
      )}
      {newsArticle(
        "Bitcoin repeats rare weekly chart signal that resulted in 50% BTC price dips",
        "Learn more now"
      )}
      {newsArticle(
        "Binance announces crypto card for Ukrainian refugees",
        "Learn more now"
      )}
    </div>
  );
};
