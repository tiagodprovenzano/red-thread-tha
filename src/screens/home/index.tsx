import { Header } from "@/components/header/component";
import { ListMovie } from "@/model";
import "./style.css";
import { MovieItem } from "@/components/movie-item";

interface HomeScreenProps {
  movies: ListMovie[];
}

export const HomeScreen = ({ movies }: HomeScreenProps) => {
  return (
    <>
      <Header title="Pop Movies" />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
