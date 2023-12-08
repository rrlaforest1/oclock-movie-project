import { createContext, useState, useEffect } from "react";
import axios from "axios";
//import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "./MoviesContext";

export const SearchContext = createContext("");

const SearchController = ({ children }: any) => {
  const [movies, setMovies] = useContext(MoviesContext);

  const [query, setQuery] = useState("");
  //let location = useLocation();

  const API_KEY = import.meta.env.VITE_API_KEY;

  console.log("query on moviecontext", query);

  // const apiURL = `https://api.themoviedb.org/3/search/movie?&language=fr-FR&query=${query.replace(
  //       / /g,
  //       "%20"
  //     )}&api_key=${API_KEY}`;

  const apiURL = `https://api.themoviedb.org/3/search/movie?&language=fr-FR&query=${query}&api_key=${API_KEY}`;

  console.log("apiURLSearch", apiURL);

  const fetchSearch = async () => {
    console.log("fetchSearch");

    try {
      const response = await axios.get(apiURL);

      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query !== "") {
      fetchSearch();
    }
  }, [query]);

  // est ce qu'on peut appeler les values pareils que les state ?
  return (
    <SearchContext.Provider value={[query, setQuery]}>
      {/* {isLoading ? children : "rien"} */}
      {children}
    </SearchContext.Provider>
  );
};

export default SearchController;
