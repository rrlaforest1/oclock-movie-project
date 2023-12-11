import MovieList from "../../MovieList/MovieList";
import SearchBar from "../../Search/Search";
import LayoutList from "../../LayoutList/LayoutList";

function HomePage() {
  return (
    <main>
      <LayoutList
        title="Hulking's Movie App"
        description="Retrouvez ici la liste de vos films préférés."
        element={<SearchBar />}
      >
        <MovieList />
      </LayoutList>
    </main>
  );
}

export default HomePage;
