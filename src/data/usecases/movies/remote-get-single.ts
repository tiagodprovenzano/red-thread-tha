import { HttpClient, HttpMethod } from "@/infra/http/types";
import {
  GetSingleMovieUsecase,
  GetSingleMovieUsecaseParams,
  GetSingleMovieUsecaseResult,
} from "@/model";

export class RemoteGetSingleMovieUsecase implements GetSingleMovieUsecase {
  constructor(
    private readonly httpClient: HttpClient<GetSingleMovieUsecaseResult>
  ) {}

  async execute(
    params: GetSingleMovieUsecaseParams
  ): Promise<GetSingleMovieUsecaseResult> {
    const response = await this.httpClient.request({
      url: "movie/" + params.movie_id,
      method: HttpMethod.get,
    });

    if (response.body) {
      return response.body;
    }

    throw new Error("Unexpected error");
  }
}
