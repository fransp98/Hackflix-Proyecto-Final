import Movie from "./Movie";
import StarFilters from "./StarsFilter";

function MovieSection({ movies, handleFilter }) {
  return (
    <div>
      <StarFilters onFilter={handleFilter} />
      <div className="movies-section container justify-content-center d-flex flex-wrap gap-3">
        <Movie movies={movies} />
      </div>
    </div>
  );
}

export default MovieSection;
