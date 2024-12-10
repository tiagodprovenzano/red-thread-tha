import { DiscoverMoviesUseCaseParams } from "./params";
import { DiscoverMoviesUseCaseResult } from "./result";

export interface DiscoverMoviesUseCase {
  execute: (
    params: DiscoverMoviesUseCaseParams
  ) => Promise<DiscoverMoviesUseCaseResult>;
}
