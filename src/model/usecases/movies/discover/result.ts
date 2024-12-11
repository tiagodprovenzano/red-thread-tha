import { ListMovie } from "@/model";

export interface DiscoverMoviesUsecaseResult {
  page: number;
  results: ListMovie[];
}
