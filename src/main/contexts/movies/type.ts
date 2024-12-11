import {
  DiscoverMoviesUsecaseParams,
  ListMovie,
  MovieDetails,
  MovieVideo,
} from "@/model";

export interface MoviesContextType {
  movies: ListMovie[];
  singleMovieDetails?: MovieDetails;
  loading: boolean;
  discoverMoviesOptions: DiscoverMoviesUsecaseParams;
  updateDiscoverMoviesOptions: (options: DiscoverMoviesUsecaseParams) => void;
  fetchMovies: () => void;
  fetchSingleMovie: () => void;
  fetchMovieVideos: () => void;
  trailers: MovieVideo[];
}
