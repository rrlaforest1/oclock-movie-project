import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import MoviesController from "./context/MoviesContext";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import MovieDetails from "./components/pages/MovieDetails/MovieDetails";

function App() {
  return (
    <MoviesController>
      <div>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/movie/:movieId"} element={<MovieDetails />} />
        </Routes>
      </div>
    </MoviesController>
  );
}

export default App;
