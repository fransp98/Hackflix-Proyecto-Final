import halloweenMovies from "../data/halloweenMovies.json";

function MovieJson() {
  const movies = halloweenMovies;
  return (
    <div className="container">
      {movies.map((movie) => (
        <div key={movie.id} className="row mt-3 mb-3">
          <div className="col-4">
            <img className="poster-img" src={movie.image} alt={movie.title} />
          </div>
          <div className="col-8">
            <h2> {movie.title} </h2>
            <p> {movie.plot} </p>
            <p> {movie.review} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieJson;
