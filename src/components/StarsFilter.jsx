import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function StarFilters({ onFilter }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onFilter(newRating * 2);
  };

  return (
    <div className="d-flex justify-content-center align-items-center star-filter">
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
