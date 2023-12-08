import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../../context/MoviesContext";
import { useParams, useNavigate } from "react-router-dom";

import "./MovieDetails.scss";
import { log } from "util";

function MovieDetails() {
  const [movies] = useContext(MoviesContext);
  const { movieId } = useParams();

  const navigate = useNavigate();

  const film = movies.results.find((movie) => movie.id == movieId);
  const filmIndex = movies.results.findIndex((movie) => movie.id == movieId);

  console.log("filmIndex", filmIndex);

  const handleClick = (direction) => {
    if (direction === "next") {
      navigate("/movie/" + movies.results[filmIndex + 1].id);
    } else {
      navigate("/movie/" + movies.results[filmIndex - 1].id);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(
            https://image.tmdb.org/t/p/original${film.backdrop_path}
          )`,
        }}
        className={`movie-details ${!film.backdrop_path ? "info-dark" : ""}`}
      >
        {/* <img
          src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
          alt={film.title}
          className="w-full"
        /> */}
        <div className="movie-details-info">
          {!film.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
              alt={film.title}
              className="movie-details-info-poster"
            />
          )}
          <h1 className="movie-details-info-title">{film.title}</h1>
          <p className="movie-details-info-date">
            <span>Date de sortie :</span>{" "}
            {new Intl.DateTimeFormat("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(film.release_date))}
          </p>
          <p className="movie-details-info-description">
            <span>SYNOPSIS</span>
            {film.overview}
          </p>
          <p className="movie-details-info-reviews">
            {film.vote_average} / 10 <span>({film.vote_count})</span>
          </p>
          <div className="movie-details-info-arrows">
            {filmIndex == 0 ? (
              ""
            ) : (
              <div
                onClick={() => handleClick("prev")}
                className="movie-details-info-arrows-arrow movie-prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                Film Precedent
              </div>
            )}
            {filmIndex == movies.results.length - 1 ? (
              ""
            ) : (
              <div
                onClick={() => handleClick("next")}
                className="movie-details-info-arrows-arrow movie-next"
              >
                Film Suivant
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
