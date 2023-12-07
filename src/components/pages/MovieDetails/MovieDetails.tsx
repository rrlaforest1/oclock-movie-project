import { useContext } from "react";
import { MoviesContext } from "../../../context/MoviesContext";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movies, setMovies] = useContext(MoviesContext);

  console.log("movies Moviedetails", movies);

  let { movieId } = useParams();
  console.log("movieId", movieId);

  const film = movies.results.find((movie) => movie.id == movieId);
  console.log("film", film);

  console.log("movies MovieDetails", movies);

  return (
    <>
      <h1>{film.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
        alt={film.title}
        className="w-full"
      />
    </>
  );
}

export default MovieDetails;
