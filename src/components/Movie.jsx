import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Movie({ movies, getMovies }) {
  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={getMovies}
        hasMore={true}
        loader={<Loader />}
        /* 
        dataLength compara la cantidad de peliculas en el array con la cantidad de peliculas mostradas y decide si es necesario ejecutar el next
        next llama a la funcion asincronica del fetch
        hasMore indica que hay mas datos por cargar
        loader carga el componente Loader mientras se consulta la api
        */
      >
        <div className="movies-section container justify-content-center d-flex flex-wrap gap-3">
          {movies.map((movie) => (
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
      </InfiniteScroll>
    </>
  );
}

export default Movie;
