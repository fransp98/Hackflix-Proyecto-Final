function Movie({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.poster_path} alt={movie.title} />
        </div>
      ))}
    </>
  );
}

export default Movie;
