import { RemoteCreateGuestSessionUsecase } from "@/data";
import { makeHttpClient } from "@/infra/http/make-http-client";
import { CreateGuestSessionUsecase } from "@/model";

export const makeCreateGuestSessionUsecase = (): CreateGuestSessionUsecase => {
  const api = makeHttpClient();
  return new RemoteCreateGuestSessionUsecase(api);
};
