import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext("");

const MoviesController = ({ children }: any) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const API_KEY = import.meta.env.VITE_API_KEY;
  const API_KEY = "9d2a202f1952323a99e4d270b96418d7";

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
      );

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
  }, []);

  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {isLoading ? children : "rien"}
    </MoviesContext.Provider>
  );
};

export default MoviesController;
