import { HttpClient, HttpMethod } from "@/infra/http/types";
import {
  DiscoverMoviesUseCase,
  DiscoverMoviesUseCaseParams,
  DiscoverMoviesUseCaseResult,
} from "@/model";

export class RemoteDiscoverUseCase implements DiscoverMoviesUseCase {
  constructor(
    private readonly httpClient: HttpClient<DiscoverMoviesUseCaseResult>
  ) {}

  async execute(
    params: DiscoverMoviesUseCaseParams
  ): Promise<DiscoverMoviesUseCaseResult> {
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
