import TpoBanner from "./components/TopBanner";
import { useState, useEffect } from "react";
import "./App.css";
import MovieSection from "./components/MoviesSection";
import StarsFilter from "./components/StarsFilter";
/* import movies from "./data/movies.json"; */

function App() {
  const [movies, setMovies] = useState([]);
  // a990bf3702ca2532fca8742542f6e792
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=a990bf3702ca2532fca8742542f6e792&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
      );
      const moviesList = await response.json();
      setMovies(moviesList.results);
    }
    getMovies();
  }, []);
  const handleFilter = (minRating) => {
    const results = movies.filter((movie) => movie.vote_average >= minRating);
    setMovies(results);
  };

  return (
    <>
      <TpoBanner> </TpoBanner>

      <MovieSection movies={movies} handleFilter={handleFilter} />
    </>
  );
}

export default App;
