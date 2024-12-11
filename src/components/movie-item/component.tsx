import "./style.css";
import { ListMovie } from "@/model";
import useMovieItem from "./hook";

interface Props {
  movie: ListMovie;
}

export const MovieComponent = ({ movie }: Props) => {
  const { posterPath, handleMovieItemClick } = useMovieItem(movie);
  return (
    <div
      data-testid={"movie"}
      className="movie-item-container"
      onClick={handleMovieItemClick}
    >
      <img src={posterPath} alt={movie.title} />
    </div>
  );
};
