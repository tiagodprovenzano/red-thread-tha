import { DiscoverMoviesUsecaseParams, ListMovie } from "@/model";

export interface MoviesContextType {
  movies: ListMovie[];
  loading: boolean;
  discoverMoviesOptions: DiscoverMoviesUsecaseParams;
  updateDiscoverMoviesOptions: (options: DiscoverMoviesUsecaseParams) => void;
  fetchMovies: () => void;
}
