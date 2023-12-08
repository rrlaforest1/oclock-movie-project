import { useContext } from "react";
import { MoviesContext } from "../../../context/MoviesContext";
import { useParams } from "react-router-dom";

import "./MovieDetails.scss";

function MovieDetails() {
  const [movies , setMovies] = useContext(MoviesContext);

  console.log("movies Moviedetails", movies);

  let { movieId } = useParams();
  console.log("movieId", movieId);

  const film = movies.results.find((movie) => movie.id == movieId);
  console.log("film", film);

  console.log("movies MovieDetails", movies);


  return (
    <>
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
          
          alt={film.title}
          className="w-full"
        />
        <h1>{film.title}</h1>
        <p>{film.release_date}</p>
        <p>{film.overview}</p>
      </div>
    </>
  );
}

export default MovieDetails;
