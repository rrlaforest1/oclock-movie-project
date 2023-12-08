import React from "react";
import MovieList from "../../MovieList/MovieList";
import SearchBar from "../../Search/Search";

function HomePage() {
  return (
    <>
      <div className="text-xl">HomePage</div>
      <SearchBar />
      <MovieList />
    </>
  );
}

export default HomePage;
