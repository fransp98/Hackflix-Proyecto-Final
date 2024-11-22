import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBanner from "../components/TopBanner";

function Peliculas() {
  const movieId = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId.id}?language=es-ES&api_key=a990bf3702ca2532fca8742542f6e792`
        );
        const movie = await response.json();
        setMovie(movie);
      } catch {
        console.log(error);
      }
    }
    getMovie();
  }, []);

  return (
    <>
      <TopBanner
        img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        title={movie.original_title}
        text={movie.tagline}
      />
    </>
  );
}

export default Peliculas;
