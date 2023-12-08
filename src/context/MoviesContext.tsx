import { createContext, useState, useEffect } from "react";
import axios from "axios";
//import { useLocation } from "react-router-dom";

export const MoviesContext = createContext("");

const MoviesController = ({ children }: any) => {
  const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  //let location = useLocation(); 
  

  const API_KEY = import.meta.env.VITE_API_KEY;
  


  const apiURL =  `https://api.themoviedb.org/3/discover/movie?&language=fr-FR&api_key=${API_KEY}`;

      

  console.log("apiURLMovies", apiURL);

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
  }, []);

  // est ce qu'on peut appeler les values pareils que les state ?
  return (
    <MoviesContext.Provider
      value={[movies, setMovies]}
    >
      {isLoading ? children : "rien"}
    </MoviesContext.Provider>
  );
};

export default MoviesController;
