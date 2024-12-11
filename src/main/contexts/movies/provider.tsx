import { DiscoverMoviesUsecaseParams, ListMovie, MovieDetails } from "@/model";
import { PropsWithChildren, useCallback, useRef, useState } from "react";
import { MoviesContext } from "./context";
import { MoviesRepository } from "@/domain/repositories/movies-repository";
import { useParams } from "react-router";

export const MoviesContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [movies, setMovies] = useState<ListMovie[]>([]);
  const [singleMovie, setSingleMovie] = useState<MovieDetails>();
  const [loading, setLoading] = useState(false);
  const { id: singleMovieId } = useParams();
  const [discoverMoviesOptions, setDiscoverMoviesOptions] =
    useState<DiscoverMoviesUsecaseParams>({
      language: "en-US",
      region: "US",
      page: 1,
    });
  const isLoading = useRef(false);

  const fetchMovies = useCallback(async () => {
    if (isLoading.current) return;
    new MoviesRepository()
      .discover(discoverMoviesOptions)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        isLoading.current = false;
        setLoading(false);
      });
  }, [discoverMoviesOptions]);

  const fetchSingleMovie = useCallback(async () => {
    if (isLoading.current || !singleMovieId) return;
    new MoviesRepository()
      .getSingle({ movie_id: Number(singleMovieId) })
      .then((data) => {
        setSingleMovie(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        isLoading.current = false;
        setLoading(false);
      });
  }, [singleMovieId]);

  const updateDiscoverMoviesOptions = useCallback(
    (options: Partial<DiscoverMoviesUsecaseParams>) => {
      setDiscoverMoviesOptions((prev) => ({ ...prev, ...options }));
    },
    []
  );

  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        discoverMoviesOptions,
        fetchMovies,
        updateDiscoverMoviesOptions,
        fetchSingleMovie,
        singleMovieDetails: singleMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
