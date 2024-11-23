import { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Peliculas from "./page/Peliculas";
import Error from "./page/Error";

function App() {
  // Variables useState
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(10);
  const [page, setPage] = useState(1);

  // Router rutas
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home movies={movies} setRating={setRating} getMovies={getMovies} />
      ),
    },
    {
      path: "/peliculas/:id",
      element: <Peliculas />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  // useEffect que hace un nuevo fetch cada vez que se modifica el filtro de estrellas
  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [rating]);

  // Funcion asincronica que hace el fetch y cambia de pagina cada vez que se ejecuta el componente InfiniteScroll
  async function getMovies() {
    setPage(page + 1);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=a990bf3702ca2532fca8742542f6e792&include_adult=false&page=${page}&sort_by=popularity.desc&vote_count.gte=100&vote_average.lte=${rating}&vote_count.gte=40`
      );
      const moviesList = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...moviesList.results]);
    } catch (error) {
      console.log(error);
    }
  }
  //sadasd

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
