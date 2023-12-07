import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import MoviesController from "./context/MoviesContext";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";

function App() {
  return (
    <MoviesController>
      <div>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </div>
    </MoviesController>
  );
}

export default App;
