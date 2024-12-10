import { HttpClient, HttpMethod } from "@/infra/http/types";
import {
  DiscoverMoviesUsecase,
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseResult,
} from "@/model";

export class RemoteDiscoverMoviesUsecase implements DiscoverMoviesUsecase {
  constructor(
    private readonly httpClient: HttpClient<DiscoverMoviesUsecaseResult>
  ) {}

  async execute(
    params: DiscoverMoviesUsecaseParams
  ): Promise<DiscoverMoviesUsecaseResult> {
    const response = await this.httpClient.request({
      url: "discover/movie",
      method: HttpMethod.get,
      filters: [
        ...Object.keys(params).map((key) => ({
          field: key,
          value: `${params[key as keyof DiscoverMoviesUsecaseParams]}`,
        })),
      ],
    });

    if (response.body) {
      return response.body;
    }

    throw new Error("Unexpected error");
  }
}
