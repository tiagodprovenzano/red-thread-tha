import { usePosterPath } from "@/main/hooks";
import { ListMovie } from "@/model";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const useMovieItem = (movie: ListMovie) => {
  const posterPath = usePosterPath(movie.poster_path);

  const navigate = useNavigate();
  const handleMovieItemClick = useCallback(() => {
    navigate("/movies/" + movie.id);
  }, [movie.id, navigate]);

  return { posterPath, handleMovieItemClick };
};

export default useMovieItem;
