import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
  const [query, setQuery] = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("input", input);

    setQuery(input);
    // console.log("query", query);
  };

  return (
    <div className="flex items-center container mx-auto">
      <form
        action=""
        className="border-primary-300 rounded overflow-hidden flex"
        onSubmit={handleSubmit}
      >
        <input
          className="px-4 py-2"
          placeholder="Rechercher un film"
          value={input}
          type="text"
          onChange={handleChange}
        />
        <button className="flex items-center justify-center px-4 border-l  bg-primary-300 text-white">
          <svg
            className="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
