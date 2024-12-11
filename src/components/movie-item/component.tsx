import { usePosterPath } from "@/main/hooks";
import "./style.css";
import { Movie } from "@/model";

interface Props {
  movie: Movie;
}

export const MovieComponent = ({ movie }: Props) => {
  const posterPath = usePosterPath(movie.poster_path);
  return (
    <div data-testid={"movie"} className="movie-item-container">
      <img src={posterPath} alt={movie.title} />
    </div>
  );
};
