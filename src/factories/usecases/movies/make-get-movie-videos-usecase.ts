import { RemoteGetMovieVideosUsecase } from "@/data";
import { makeHttpClient } from "@/infra/http/make-http-client";
import { GetMovieVideosUsecase } from "@/model";

export const makeGetMovieVideosUsecase = (): GetMovieVideosUsecase => {
  const api = makeHttpClient();
  return new RemoteGetMovieVideosUsecase(api);
};
