import { useState } from "react";
import { Link } from "react-router-dom";

function BuscadorInput() {
  const [movieQuery, setMovieQuery] = useState("");
  const [moviesArray, setMoviesArray] = useState([]);

  const movieQueryInput = (event) => {
    setMovieQuery(event.target.value);
  };

  async function getMovieByQuery() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieQuery}&include_adult=false&language=es-ES&page=1&api_key=a990bf3702ca2532fca8742542f6e792&vote_count.gte=100`
      );
      const movies = await response.json();
      setMoviesArray(movies.results);
    } catch {
      console.log(error);
    }
  }

  return (
    <div className="container buscador">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="escrube aqui tu peli :)"
          onChange={movieQueryInput}
        ></input>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={getMovieByQuery}
        >
          Buscar
        </button>
      </div>
      <div className="movies-section container justify-content-center d-flex flex-wrap gap-3">
        {moviesArray.map((movie) => (
          <Link key={movie.id} to={`/Peliculas/${movie.id}`}>
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BuscadorInput;
