import { MoviesContext } from "@/main/contexts/movies/context";
import { HomeScreen } from "@/screens/home";
import { useContext, useEffect } from "react";

export const HomeScreenFactory = () => {
  const { movies, fetchMovies, fetchMoreMovies } = useContext(MoviesContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return <HomeScreen movies={movies} handleFetchMoreMovies={fetchMoreMovies} />;
};
