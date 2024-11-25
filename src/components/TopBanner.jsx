import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const TopBanner = ({ img, title, text }) => {
  // variable que se guarda la img que llega por props para cargarla como background img en linea
  const bannerStyle = {
    background: `linear-gradient(to top, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${img})`,
  };

  return (
    <div style={bannerStyle} className="conteinerbanner">
      <div>
        <h1 className="titulo">{title}</h1>
        <h6 className="h6">{text}</h6>
      </div>
      <div className="navbar">
        <Link className="linkstyle" to="/">
          <h3 className="home">Inicio</h3>
        </Link>
        <Link className="linkstyle" to="/buscador">
          <h3 className="home">Buscar</h3>
        </Link>
        <h2 className="home">|</h2>
        <Link className="linkstyle" to="/recomendaciones+halloween">
          <h3 className="home">Halloween</h3>
        </Link>
      </div>
      <Link to="/">
        <h3 className="HACKFLIX">HACKFLIX</h3>
      </Link>
    </div>
  );
};

export default TopBanner;
