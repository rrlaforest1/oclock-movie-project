import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";
import Card from "../Card/Card";



function MovieList() {
  const [movies, setMovies] = useContext(MoviesContext);
  const location = useLocation();
  //console.log("movies", movies.results);

  
  useEffect(() => {}, [location]);

  return (
    <>
      {movies.results.map((movie : any) => {
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
