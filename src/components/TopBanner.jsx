import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const TopBanner = ({ img, title, text }) => {
  const bannerStyle = {
    background: `linear-gradient(to top, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${img})`,
  };

  return (
    <div style={bannerStyle} className="conteinerbanner">
      <div>
        <h1 className="titulo">{title}</h1>
        <h6 className="h6">{text}</h6>
      </div>
      <Link to="/">
        <h3 className="home"> Home</h3>
      </Link>
      <h3 className="HACKFLIX">HACKFLIX</h3>
    </div>
  );
};

export default TopBanner;
