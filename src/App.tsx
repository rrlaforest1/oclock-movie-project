import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=9d2a202f1952323a99e4d270b96418d7"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default App;
