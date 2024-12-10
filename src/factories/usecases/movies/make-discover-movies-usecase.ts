import { RemoteDiscoverMoviesUsecase } from "@/data";
import { makeHttpClient } from "@/infra/http/make-http-client";
import { DiscoverMoviesUseCase } from "@/model";

export const makeDiscoverMoviesUsecase = (): DiscoverMoviesUseCase => {
  const api = makeHttpClient();
  return new RemoteDiscoverMoviesUsecase(api);
};
