import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";
import { SearchContext } from "../../context/SearchContext";

import "./MovieList.scss";

function MovieList() {
  const [movies, setMovies] = useContext(MoviesContext);
  const location = useLocation();
  console.log("movies", movies.results);

  const imgPlaceholder =
    "https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";

  useEffect(() => {}, [location]);

  return (
    <>
      <div className="cards">
        {movies.results.map((movie, index) => {
          return (
            <>
              {movie.poster_path && (
                <div
                  key={movie.id}
                  className="card max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8"
                >
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path} `
                          : imgPlaceholder
                      }
                      alt={movie.title}
                      className="w-full"
                    />
                  </Link>
                  <div className="cardContent px-6 py-4">
                    <h2 className="font-bold text-xl mb-2"> {movie.title}</h2>
                    <p className="text-gray-600 text-base"> {movie.overview}</p>
                    <p className="mt-5">
                      <Link
                        className="bg-blue-700 hover:bg-blue-900 active:bg-blue-800 px-3 py-2 outline-none rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out text-white text-lg tracking-wide"
                        to={`/movie/${movie.id}`}
                      >
                        En savoir plus
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default MovieList;
