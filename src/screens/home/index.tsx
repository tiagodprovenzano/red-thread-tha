import { Header } from "@/components/header/component";
import { Movie } from "@/model";
import "./style.css";
import { MovieItem } from "@/components/movie-item";

interface HomeScreenProps {
  movies: Movie[];
}

export const HomeScreen = ({ movies }: HomeScreenProps) => {
  return (
    <div className="content-wrapper">
      <Header title="Pop Movies" />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
