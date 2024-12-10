import { RemoteDiscoverMoviesUsecase } from "@/data";
import { makeHttpClient } from "@/infra/http/make-http-client";
import { DiscoverMoviesUsecase } from "@/model";

export const makeDiscoverMoviesUsecase = (): DiscoverMoviesUsecase => {
  const api = makeHttpClient();
  return new RemoteDiscoverMoviesUsecase(api);
};
