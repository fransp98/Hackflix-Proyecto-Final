import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function StarFilters({ setRating }) {
  // funcion que da valor a la variable rating y que sea del 0 al 10 en vez de 0 al 5
  const handleRatingChange = (newRating) => {
    setRating(newRating * 2);
  };

  return (
    <div className="d-flex justify-content-center align-items-center star-filter mb-3">
      <h3 className="filtro">Filtrar por rating</h3>

      <ReactStars
        count={5}
        onChange={handleRatingChange}
        size={50}
        activeColor="#ff4f14"
        value={5}
        /* 
        count = cantidad de estrellas
        onChange = ejecuta la funcion handleRatingChange cada vez que se modifica el componente
        size = tamaño de las estrellas
        activeColor = color de las estrellas activadas
        value = valor inicial del filtro
        */
      />
    </div>
  );
}

export default StarFilters;
