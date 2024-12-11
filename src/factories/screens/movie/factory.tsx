import { MoviesContext } from "@/main/contexts/movies/context";
import { usePosterPath } from "@/main/hooks";
import { MovieScreen } from "@/screens/movie";
import { useContext, useEffect } from "react";

export const MovieScrenFactory = () => {
  const { fetchSingleMovie, singleMovieDetails, fetchMovieVideos, trailers } =
    useContext(MoviesContext);

  useEffect(() => {
    fetchSingleMovie();
  }, [fetchSingleMovie]);

  useEffect(() => {
    fetchMovieVideos();
  }, [fetchMovieVideos]);

  const posterPath = usePosterPath(singleMovieDetails?.poster_path || "");
  return (
    <MovieScreen
      movieDetails={singleMovieDetails}
      posterPath={posterPath}
      trailers={trailers}
    />
  );
};
