import { HttpClient, HttpMethod } from "@/infra/http/types";
import {
  GetMovieVideosUsecase,
  GetMovieVideosUsecaseParams,
  GetMovieVideosUsecaseResult,
} from "@/model";

export class RemoteGetMovieVideosUsecase implements GetMovieVideosUsecase {
  constructor(
    private readonly httpClient: HttpClient<GetMovieVideosUsecaseResult>
  ) {}

  async execute(
    params: GetMovieVideosUsecaseParams
  ): Promise<GetMovieVideosUsecaseResult> {
    const response = await this.httpClient.request({
      url: "movie/" + params.movie_id + "/videos",
      method: HttpMethod.get,
    });

    if (response.body) {
      return response.body;
    }

    throw new Error("Unexpected error");
  }
}
