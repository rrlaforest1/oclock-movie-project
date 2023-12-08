import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const MoviesContext = createContext("");

const MoviesController = ({ children }: any) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  console.log("location", location);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchMovie = async () => {
    console.log("fetchMovie");
    const apiURL = `https://api.themoviedb.org/3/discover/movie?&language=fr-FR&api_key=${API_KEY}`;

    try {
      const response = await axios.get(apiURL);

      console.log(response.data);
      setMovies(response.data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const date = new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(Date.now());

  const fetchRelease = async () => {
    // const apiURL =  `https://api.themoviedb.org/3/discover/movie?&language=fr-FR&sort_by=primary_release_date.desc&api_key=${API_KEY}`;

    const apiURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=fr-FR&page=1&sort_by=primary_release_date.desc&with_release_type=3&release_date.lte=${date}&with_origin_country=FR&api_key=${API_KEY}`;

    try {
      const response = await axios.get(apiURL);

      console.log(response.data);
      setMovies(response.data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location.pathname == "/releases") {
      fetchRelease();
    } else if (location.pathname.indexOf("/movie") > -1) {
      console.log("on est sur un page film");
    } else {
      fetchMovie();
    }
  }, [location]);

  // est ce qu'on peut appeler les values pareils que les state ?
  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {isLoading ? children : "rien"}
    </MoviesContext.Provider>
  );
};

export default MoviesController;
