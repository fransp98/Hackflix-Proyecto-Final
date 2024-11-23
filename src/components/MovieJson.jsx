import halloweenMovies from "../data/halloweenMovies.json";
import Footer from "./Footer";

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
            <h2 className="Title Primary"> {movie.title} </h2>
            <h3 className="Year">Released dates: {movie.year} </h3>
            <span className="Plot"> Plot: {movie.plot} </span>
            <span className="Review"> Review: {movie.review} </span>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default MovieJson;
