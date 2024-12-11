import { DiscoverMoviesUsecaseParams, Movie } from "@/model";

export interface MoviesContextType {
  movies: Movie[];
  loading: boolean;
  discoverMoviesOptions: DiscoverMoviesUsecaseParams;
  updateDiscoverMoviesOptions: (options: DiscoverMoviesUsecaseParams) => void;
  fetchMovies: () => void;
}
