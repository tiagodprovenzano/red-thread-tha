import {
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseParamsSortBy,
  Movie,
} from "@/model";
import { PropsWithChildren, useCallback, useRef, useState } from "react";
import { MoviesContext } from "./context";
import { MoviesRepository } from "@/domain/repositories/movies-repository";

export const MoviesContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const [discoverMoviesOptions, setDiscoverMoviesOptions] =
    useState<DiscoverMoviesUsecaseParams>({
      sort_by: DiscoverMoviesUsecaseParamsSortBy.popularity_desc,
      include_adult: false,
      include_video: false,
      language: "en-US",
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
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
