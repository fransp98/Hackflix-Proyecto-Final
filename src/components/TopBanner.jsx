import React from "react";
import "../App.css";

const TpoBanner = () => {
  return (
    <div className="conteinerbanner">
      <img
        className="banner"
        src="https://a-us.storyblok.com/f/1002378/1920x823/8e1fc26772/best-websites-for-filmmakers-blog-banner.jpeg"
        alt="Wallpaper Banner"
      />
      <h1 className="titulo"> ¡TUS PELICULAS FAVORITAS! </h1>
      <h6 className="h6">
        Siempre somos los preferidos para los verdaderos fanaticos
      </h6>
      <h3 className="HACKFLIX">HACKFLIX</h3>
      <h3 className="home"> Home</h3>
    </div>
  );
};

export default TpoBanner;
