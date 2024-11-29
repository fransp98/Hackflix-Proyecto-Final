import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import MovieDetails from "../components/MovieDetails";
import Loader from "../components/Loader";

function Peliculas() {
  // useParams es un hook de react router dom que se guarda el id que hay en el buscador de google en la variable movieId
  const movieId = useParams();
  const [movie, setMovie] = useState("");
  const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;

  // este useEffect hace el llamado a la api cuando el componente Peliculas.jsx se renderiza por primera vez
  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId.id}?language=es-ES&api_key=${apiKey}`
        );
        const movie = await response.json();
        setMovie(movie);
      } catch {
        console.log(error);
      }
    }
    getMovie();
  }, []);

  // este condicional muestra el Loader hasta que movie deje de ser un objeto vacio.
  return movie ? (
    <>
      <TopBanner
        img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        title={movie.original_title}
        text={movie.tagline}
      />
      <MovieDetails movie={movie} />
    </>
  ) : (
    <Loader />
  );
}

export default Peliculas;
