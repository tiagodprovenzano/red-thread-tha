import {
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseResult,
  GetSingleMovieUsecaseParams,
  GetSingleMovieUsecaseResult,
  GetMovieVideosUsecaseParams,
  GetMovieVideosUsecaseResult,
} from "../usecases";

export interface IMoviesRepository {
  discover(
    params: DiscoverMoviesUsecaseParams
  ): Promise<DiscoverMoviesUsecaseResult>;

  getSingle(
    params: GetSingleMovieUsecaseParams
  ): Promise<GetSingleMovieUsecaseResult>;

  getMovieVideos(
    params: GetMovieVideosUsecaseParams
  ): Promise<GetMovieVideosUsecaseResult>;
}
