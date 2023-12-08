import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";

const Quizz = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  const [randomMovie, setRandonMovie] = useState([]);
  console.log("quizzmovies", movies);

  const getOneRandomMovie = (movies) => {
    const values = Object.values(movies);
    const randomChoice = Math.floor(Math.random() * values.length);
    // return movies.results[randomChoice];
    setRandonMovie(movies.results[randomChoice]);
  };

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const compareRelease = (dateMovie, datePlayer) => {
    if (dateMovie == datePlayer) {
      setResult("Youpi ! Vous avez gagné : :-D ");
    } else {
      setResult("Oh vous avez perdu ! :'( ");
    }
  };

  const handleOnChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("submit !!!!!");

    // const selectedMovie = getOneRandomMovie(movies);
    //console.log(selectedMovie);

    const releaseDate = randomMovie.release_date;
    //console.log("date complete", releaseDate);
    const releaseYear = releaseDate.slice(0, 4);
    console.log("date year", releaseYear);

    compareRelease(releaseYear, input);
  };

  useEffect(() => {
    getOneRandomMovie(movies);
  }, []);

  return (
    <>
      <h1>Quizz</h1>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
          alt=""
        />
        <h2>{randomMovie.title}</h2>
      </div>

      <div>
        <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="date">
            choisir l'année de sortie
            <input id="date" type="text" onChange={handleOnChange} />
          </label>
          <button>Submit</button>
        </form>
      </div>

      <div>résultat : {result}</div>
    </>
  );
};

export default Quizz;
