import { GetMovieVideosUsecaseParams } from "./params";
import { GetMovieVideosUsecaseResult } from "./result";

export interface GetMovieVideosUsecase {
  execute(
    params: GetMovieVideosUsecaseParams
  ): Promise<GetMovieVideosUsecaseResult>;
}
