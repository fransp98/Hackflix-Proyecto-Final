import Movie from "./Movie";

function MovieSection({ movies }) {
  return (
    <div className="movies-section container justify-content-center d-flex flex-wrap gap-3">
      <Movie movies={movies} />
    </div>
  );
}

export default MovieSection;
