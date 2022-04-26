import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

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
      {newsArticle("New feature: LinkedIn for Work", "Learn more now")}
      {newsArticle("New feature: LinkedIn for Work", "Learn more now")}
      {newsArticle("New feature: LinkedIn for Work", "Learn more now")}
      {newsArticle("New feature: LinkedIn for Work", "Learn more now")}
    </div>
  );
};
