import { useState } from "react";
import halloweenMovies from "../data/halloweenMovies.json";
import Footer from "./Footer";

function MovieJson() {
  const [movies, setMovies] = useState(halloweenMovies);
  const [switcher, setSwitcher] = useState(0);

  // funcion que cada vez que se le hace click al boton de filtro deriva a una u otra filter function
  function toggleFilter() {
    if (switcher % 2 === 0) {
      setSwitcher(switcher + 1);
      filterLowToHighYear();
    } else if (switcher % 2 !== 0) {
      setSwitcher(switcher + 1);
      filterHighToLowYear();
    }
  }

  // Selection sort
  function filterLowToHighYear() {
    // nuevo array identico a movies
    const moviesSortedArray = [...movies];

    for (let i = 0; i < movies.length; i++) {
      // variable "comprobadora"
      let elementoMin = i;

      // for que empieza en el elemento siguiente al i
      for (let j = i + 1; j < movies.length; j++) {
        // si uno de los elementos siguientes es menor al elemento que se creia el mas chico se guarda su indice en la variable elementoMin
        if (moviesSortedArray[j].year < moviesSortedArray[elementoMin].year) {
          elementoMin = j;
        }
      }
      // si elementoMin es distinto a i significa que hay un elemento mas chico que el del indice i entonces los intercambia de lugar
      if (elementoMin !== i) {
        [moviesSortedArray[i], moviesSortedArray[elementoMin]] = [
          moviesSortedArray[elementoMin],
          moviesSortedArray[i],
        ];
      }
    }
    setMovies(moviesSortedArray);
  }

  // Selection sort
  function filterHighToLowYear() {
    const moviesSortedArray = [...movies];

    for (let i = 0; i < movies.length; i++) {
      let elementoMax = i;
      for (let j = i + 1; j < movies.length; j++) {
        if (moviesSortedArray[j].year > moviesSortedArray[elementoMax].year) {
          elementoMax = j;
        }
      }
      if (elementoMax !== i) {
        [moviesSortedArray[i], moviesSortedArray[elementoMax]] = [
          moviesSortedArray[elementoMax],
          moviesSortedArray[i],
        ];
      }
    }
    setMovies(moviesSortedArray);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-end m-3">
        <button type="button" onClick={toggleFilter} className="btn btn button">
          Order by year <i className="bi bi-arrow-down-up"></i>
        </button>
      </div>

      {movies.map((movie) => (
        <>
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
          <hr className="movie-division" />
        </>
      ))}
      <Footer />
    </div>
  );
}

export default MovieJson;
