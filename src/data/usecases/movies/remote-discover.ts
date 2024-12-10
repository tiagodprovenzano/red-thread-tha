import { HttpClient, HttpMethod } from "@/infra/http/types";
import {
  DiscoverMoviesUseCase,
  DiscoverMoviesUseCaseParams,
  DiscoverMoviesUsecaseResult,
} from "@/model";

export class RemoteDiscoverMoviesUsecase implements DiscoverMoviesUseCase {
  constructor(
    private readonly httpClient: HttpClient<DiscoverMoviesUsecaseResult>
  ) {}

  async execute(
    params: DiscoverMoviesUseCaseParams
  ): Promise<DiscoverMoviesUsecaseResult> {
    const response = await this.httpClient.request({
      url: "discover/movie",
      method: HttpMethod.get,
      filters: [
        ...Object.keys(params).map((key) => ({
          field: key,
          value: `${params[key as keyof DiscoverMoviesUseCaseParams]}`,
        })),
      ],
    });

    if (response.body) {
      return response.body;
    }

    throw new Error("Unexpected error");
  }
}
