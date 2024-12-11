import { MoviesContext } from "@/main/contexts/movies/context";
import { usePosterPath } from "@/main/hooks";
import { MovieScreen } from "@/screens/movie";
import { useContext, useEffect } from "react";

export const MovieScrenFactory = () => {
  const { fetchSingleMovie, singleMovieDetails } = useContext(MoviesContext);
  useEffect(() => {
    fetchSingleMovie();
  }, [fetchSingleMovie]);
  const posterPath = usePosterPath(singleMovieDetails?.poster_path || "");
  return (
    <MovieScreen movieDetails={singleMovieDetails} posterPath={posterPath} />
  );
};
