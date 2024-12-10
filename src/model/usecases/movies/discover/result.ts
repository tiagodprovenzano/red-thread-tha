import { Movie } from "@/model";

export interface DiscoverMoviesUseCaseResult {
  page: number;
  results: Movie[];
}
