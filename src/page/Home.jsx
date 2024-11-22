import TopBanner from "../components/TopBanner";
import MovieSection from "../components/MoviesSection";
import { useEffect } from "react";

function Home({ movies, setRating, getMovies }) {
  // Este useEffect resetea rating para que al volver a la pagina inicial se cargue el filtro entero
  useEffect(() => {
    setRating(10);
  }, []);

  return (
    <>
      <TopBanner
        img={
          "https://a-us.storyblok.com/f/1002378/1920x823/8e1fc26772/best-websites-for-filmmakers-blog-banner.jpeg"
        }
        title={"¡TUS PELICULAS FAVORITAS!"}
        text={"Siempre somos los preferidos para los verdaderos fanaticos"}
      />
      <MovieSection
        movies={movies}
        setRating={setRating}
        getMovies={getMovies}
      />
    </>
  );
}

export default Home;
