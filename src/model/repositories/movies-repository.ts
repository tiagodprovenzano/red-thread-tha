import {
  DiscoverMoviesUsecase,
  DiscoverMoviesUsecaseParams,
} from "../usecases";

export interface IMoviesRepository {
  discover(params: DiscoverMoviesUsecaseParams): DiscoverMoviesUsecase;
}
