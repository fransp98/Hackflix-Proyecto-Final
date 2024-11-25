import Footer from "./Footer";

function MovieDetails({ movie }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 p-3">
            <img
              className="poster-img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="col-8 p-3 details">
            <div className="lista d-flex">
              Generos:{" "}
              <ul>
                {movie.genres.map((generos) => {
                  return <li key={generos.id}>{generos.name}</li>;
                })}
              </ul>
            </div>
            <p>Sinopsis: {movie.overview}</p>
            <p>Lanzada el: {movie.release_date}</p>

            {/* toLocaleString le pone comas al precio para mejorar la legibilidad */}
            <p>Presupuesto: U$D {movie.budget.toLocaleString()}</p>
            <p>Remuneracion: U$D {movie.revenue.toLocaleString()}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MovieDetails;
