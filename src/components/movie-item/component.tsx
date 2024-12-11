import "./style.css";
import { ListMovie } from "@/model";
import useMovieItem from "./hook";

interface Props {
  movie: ListMovie;
}

export const MovieComponent = ({ movie }: Props) => {
  const { posterPath, handleMovieClick } = useMovieItem(movie);
  return (
    <div
      data-testid={"movie"}
      className="movie-item-container"
      onClick={handleMovieClick}
    >
      <img src={posterPath} alt={movie.title} />
    </div>
  );
};
