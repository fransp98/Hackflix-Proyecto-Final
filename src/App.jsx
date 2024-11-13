import TpoBanner from "./components/TopBanner";
import { useState } from "react";
import "./App.css";
import MovieSection from "./components/MoviesSection";
import movies from "./data/movies.json";

function App() {
  return (
    <>
      <TpoBanner> </TpoBanner>

      <MovieSection movies={movies} />
    </>
  );
}

export default App;
