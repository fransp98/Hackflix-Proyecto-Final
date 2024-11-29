import { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Peliculas from "./page/Peliculas";
import Error from "./page/Error";
import Buscador from "./page/Buscador";
import Halloween from "./page/Halloween";

function App() {
  // Variables useState
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(8);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;

  // Router, se le asigan diferentes componentes a cada ruta
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
      path: "/buscador",
      element: <Buscador />,
    },
    {
      // Sería mejor que la ruta sea "recomendaciones-halloween" por convenciones de URLs
      path: "/recomendaciones+halloween",
      element: <Halloween />,
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
      // TIP: Investiguen sobre variables de entorno, para que no quede la API Key visible en el repositorio
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&page=${page}&sort_by=popularity.desc&vote_count.gte=40&vote_average.gte=${rating}`
      );
      const moviesList = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...moviesList.results]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
