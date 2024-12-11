import {
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseResult,
  GetSingleMovieUsecaseParams,
  GetSingleMovieUsecaseResult,
} from "../usecases";

export interface IMoviesRepository {
  discover(
    params: DiscoverMoviesUsecaseParams
  ): Promise<DiscoverMoviesUsecaseResult>;

  getSingle(
    params: GetSingleMovieUsecaseParams
  ): Promise<GetSingleMovieUsecaseResult>;
}
