import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";

// interface Quizz {
//   title : string;
// }

const Quizz = () => {
  const [movies, setMovies] = useContext(MoviesContext); // on a enlevé setMovies
  const [randomMovie, setRandonMovie] = useState<any>("");
  console.log("quizzmovies", movies);

  const getOneRandomMovie = (movies : any) => {
    const values = Object.values(movies);
    const randomChoice = Math.floor(Math.random() * values.length);
    // return movies.results[randomChoice];
    setRandonMovie(movies.results[randomChoice]);
  };

  const handleNewMovie = () => {
    getOneRandomMovie(movies);
  }; 
  // J'ai fait une fonction pour tirer un nouveau film

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const compareRelease = (dateMovie : any, datePlayer: any) => {
    if (dateMovie == datePlayer) {
      setResult("Youpi ! Vous avez gagné : :-D ");
    } else {
      setResult("Oh vous avez perdu ! :'( ");
    }
  };

  const handleOnChange = (event: any) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit !!!!!");

    // const selectedMovie = getOneRandomMovie(movies);
    //console.log(selectedMovie);

     

    const releaseDate  = randomMovie.release_date ;
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
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Quizz</h1>
        
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
            alt={randomMovie.title}
            className="rounded-lg mb-2"
          />
          <h2>{randomMovie.title}</h2>
        </div>
  
        <div className="mb-4">
          <form action="" onSubmit={handleOnSubmit} className="flex flex-col items-center">
            <div className="mb-2">
              <label htmlFor="date" className="text-lg">Devinez l'année de sortie</label>
            </div>
            <div>
              <input id="date" type="text" onChange={handleOnChange} className="border p-2 rounded mb-4" />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded">Envoyer</button>
          </form>
        </div>
  
        <button 
          onClick={handleNewMovie}
          className="bg-green-500 text-white p-2 rounded mt-4"
        >
          Nouveau film
        </button>
  
        <div className="text-center shadow-lg p-4 bg-gray-100 rounded mt-4">résultat : {result}</div>

      </div>
    </>
  );
  
  
};

export default Quizz;
