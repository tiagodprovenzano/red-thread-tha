import { DiscoverMoviesUsecaseParams } from "./params";
import { DiscoverMoviesUsecaseResult } from "./result";

export interface DiscoverMoviesUsecase {
  execute: (
    params: DiscoverMoviesUsecaseParams
  ) => Promise<DiscoverMoviesUsecaseResult>;
}
