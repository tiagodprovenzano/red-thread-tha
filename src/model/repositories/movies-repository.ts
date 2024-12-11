import {
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseResult,
} from "../usecases";

export interface IMoviesRepository {
  discover(
    params: DiscoverMoviesUsecaseParams
  ): Promise<DiscoverMoviesUsecaseResult>;
}
