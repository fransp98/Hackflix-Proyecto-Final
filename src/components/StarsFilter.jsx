import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function StarFilters({ setRating }) {
  const handleRatingChange = (newRating) => {
    setRating(newRating * 2 - 2);
  };

  return (
    <div className="d-flex justify-content-center align-items-center star-filter mb-3">
      <h3 className="filtro">Filtrar por rating</h3>

      <ReactStars
        count={5}
        onChange={handleRatingChange}
        size={24}
        activeColor="#ff4f14"
      />
    </div>
  );
}

export default StarFilters;
