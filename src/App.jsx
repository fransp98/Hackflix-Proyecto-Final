import TpoBanner from "./components/TopBanner";
import { useState, useEffect } from "react";
import "./App.css";
import MovieSection from "./components/MoviesSection";
import InfiniteScroll from "react-infinite-scroll-component";
import StarFilters from "./components/StarsFilter";

function App() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  // a990bf3702ca2532fca8742542f6e792
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=a990bf3702ca2532fca8742542f6e792&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=100&vote_average.gte=${rating}`
      );
      const moviesList = await response.json();
      setMovies(moviesList.results);
    }
    getMovies();
  }, [rating]);

  return (
    <>
      <TpoBanner> </TpoBanner>

      <MovieSection movies={movies} setRating={setRating} />

      {/* <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={this.refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        {items}
      </InfiniteScroll> */}
    </>
  );
}

export default App;
