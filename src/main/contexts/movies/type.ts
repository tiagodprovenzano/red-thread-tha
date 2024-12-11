import { DiscoverMoviesUsecaseParams, ListMovie, MovieDetails } from "@/model";

export interface MoviesContextType {
  movies: ListMovie[];
  singleMovieDetails?: MovieDetails;
  loading: boolean;
  discoverMoviesOptions: DiscoverMoviesUsecaseParams;
  updateDiscoverMoviesOptions: (options: DiscoverMoviesUsecaseParams) => void;
  fetchMovies: () => void;
  fetchSingleMovie: () => void;
}
