import { GetSingleMovieUsecaseParams } from "./params";
import { GetSingleMovieUsecaseResult } from "./result";

export interface GetSingleMovieUsecase {
  execute(
    params: GetSingleMovieUsecaseParams
  ): Promise<GetSingleMovieUsecaseResult>;
}
