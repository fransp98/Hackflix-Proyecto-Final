import Movie from "./Movie";
import StarFilters from "./StarsFilter";

function MovieSection({ movies, setRating, getMovies }) {
  return (
    <div>
      <StarFilters setRating={setRating} />

      <Movie movies={movies} getMovies={getMovies} />
    </div>
  );
}

export default MovieSection;
