import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext("");

const MoviesController = ({ children }: any) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //api.themoviedb.org/3/search/movie?query=star%20wars

  // const API_KEY = import.meta.env.VITE_API_KEY;
  const API_KEY = "9d2a202f1952323a99e4d270b96418d7";

  console.log("query on moviecontext", query);

  const apiURL = !query.length
    ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    : `https://api.themoviedb.org/3/search/movie?query=${query.replace(
        / /g,
        "%20"
      )}&api_key=${API_KEY}`;

  console.log("apiURL", apiURL);

  const fetchMovie = async () => {
    console.log("fetchMovie");

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
    fetchMovie();
  }, [query]);

  // est ce qu'on peut appeler les values pareils que les state ?
  return (
    <MoviesContext.Provider
      value={{ valueMovie: [movies, setMovies], valueQuery: [query, setQuery] }}
    >
      {isLoading ? children : "rien"}
    </MoviesContext.Provider>
  );
};

export default MoviesController;
