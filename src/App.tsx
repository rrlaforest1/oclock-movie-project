import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import MoviesController from "./context/MoviesContext";
import SearchController from "./context/SearchContext";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import MovieDetails from "./components/pages/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <MoviesController>
      <SearchController>
        <div>
          <Navbar />

          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/movie/:movieId"} element={<MovieDetails />} />
            <Route path={"/releases"} element={<MovieList />}/>
          </Routes>
        </div>
      </SearchController>
    </MoviesController>
  );
}

export default App;
