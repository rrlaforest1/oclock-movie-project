// @ts-nocheck
import MovieList from "../../MovieList/MovieList";
import LayoutList from "../../LayoutList/LayoutList";

function ReleasePage() {
  return (
    <main>
      <LayoutList title="Les dernières sorties au cinéma">
        <MovieList />
      </LayoutList>
    </main>
  );
}

export default ReleasePage;
