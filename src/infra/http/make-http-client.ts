import { HttpFetchClient } from "@/infra/http/providers/HttpFetchClient";
import { HttpClient } from "@/infra/http/types";

export const makeHttpClient = (): HttpClient => {
  const baseUrl = import.meta.env.VITE_API_URL;
  return new HttpFetchClient(baseUrl);
};
