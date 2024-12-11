import { RemoteGetSingleMovieUsecase } from "@/data";
import { makeHttpClient } from "@/infra/http/make-http-client";
import { GetSingleMovieUsecase } from "@/model";

export const makeGetSingleMovieUsecase = (): GetSingleMovieUsecase => {
  const api = makeHttpClient();
  return new RemoteGetSingleMovieUsecase(api);
};
