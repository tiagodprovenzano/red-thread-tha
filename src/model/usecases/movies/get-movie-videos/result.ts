import { MovieVideo } from "@/model/entities";

export type GetMovieVideosUsecaseResult = {
  id: number;
  results: MovieVideo[];
};
