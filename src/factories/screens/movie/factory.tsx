import { MoviesContext } from "@/main/contexts/movies/context";
import { MovieScreen } from "@/screens/movie";
import { useContext, useEffect } from "react";

export const MovieScrenFactory = () => {
  const { fetchSingleMovie, singleMovieDetails } = useContext(MoviesContext);
  useEffect(() => {
    fetchSingleMovie();
  }, [fetchSingleMovie]);
  return <MovieScreen movieDetails={singleMovieDetails} />;
};
