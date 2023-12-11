import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";
import Card from "../Card/Card";

function MovieList() {
  const [movies, setMovies] = useContext(MoviesContext);
  const location = useLocation();
  console.log("movies", movies.results);

  const imgPlaceholder =
    "https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";

  useEffect(() => {}, [location]);

  return (
    <>
      {movies.results.map((movie, index) => {
        return (
          <>
            {movie.poster_path && (
              <Card
                key={movie.id}
                description={movie.overview}
                image={movie.poster_path}
                popularity={movie.vote_average}
                reviews={movie.vote_count}
                title={movie.title}
                url={`/movie/${movie.id}`}
              />
            )}
          </>
        );
      })}
    </>
  );
}

export default MovieList;
