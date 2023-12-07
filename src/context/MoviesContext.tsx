import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MoviesContext = createContext("");

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

const MoviesController = ({ children }: ContextProviderProps) => {
  const [movies, setMovies] = useState([]);

  // const API_KEY = import.meta.env.VITE_API_KEY;
  const API_KEY = "9d2a202f1952323a99e4d270b96418d7";

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
      );

      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesController;
