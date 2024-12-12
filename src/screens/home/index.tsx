import { Header } from "@/components/header/component";
import { ListMovie } from "@/model";
import "./style.css";
import { MovieItem } from "@/components/movie-item";

interface HomeScreenProps {
  movies: ListMovie[];
  handleFetchMoreMovies: () => void;
}

export const HomeScreen = ({
  movies,
  handleFetchMoreMovies,
}: HomeScreenProps) => {
  return (
    <>
      <Header title="Pop Movies" />
      <div
        className="movies-grid"
        onScroll={(e) => {
          const target = e.target as HTMLElement;
          if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            console.log("User has scrolled to the bottom");
            handleFetchMoreMovies();
          }
        }}
      >
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
