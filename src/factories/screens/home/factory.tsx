import { MoviesContext } from "@/main/contexts/movies/context";
import { HomeScreen } from "@/screens/home";
import { useContext, useEffect } from "react";

export const HomeScreenFactory = () => {
  const { movies, fetchMovies } = useContext(MoviesContext);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return <HomeScreen movies={movies} />;
};
