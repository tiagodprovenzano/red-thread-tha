import { Movie } from "@/model";

export interface DiscoverMoviesUsecaseResult {
  page: number;
  results: Movie[];
}
