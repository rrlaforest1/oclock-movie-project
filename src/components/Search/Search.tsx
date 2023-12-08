import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
  const [query, setQuery] = useContext(SearchContext);

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log("input", input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("input2", input);

    setQuery(input);
    console.log("query", query);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="search">Search movies</label>
        <input id="search" value={input} type="text" onChange={handleChange} />
        <button className="bg-blue-700 hover:bg-blue-900 active:bg-blue-800 px-3 py-1 outline-none rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out text-white text-lg tracking-wid">
          Ok
        </button>
      </form>
    </>
  );
};

export default SearchBar;
