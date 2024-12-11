import { makeDiscoverMoviesUsecase } from "@/factories/usecases/movies/make-discover-movies-usecase";
import {
  DiscoverMoviesUsecase,
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseParamsSortBy,
  DiscoverMoviesUsecaseResult,
} from "@/model";
import { IMoviesRepository } from "@/model/repositories/movies-repository";
import invariant from "tiny-invariant";

export class MoviesRepository implements IMoviesRepository {
  private discoverFactory: () => DiscoverMoviesUsecase;
  constructor(factories?: { discoverFactory: () => DiscoverMoviesUsecase }) {
    this.discoverFactory =
      factories?.discoverFactory ?? makeDiscoverMoviesUsecase;
  }

  discover(
    params: DiscoverMoviesUsecaseParams = {
      sort_by: DiscoverMoviesUsecaseParamsSortBy.popularity_desc,
      include_adult: false,
      include_video: false,
      language: "en-US",
    }
  ): Promise<DiscoverMoviesUsecaseResult> {
    // validating params.sort_by
    switch (params.sort_by) {
      case DiscoverMoviesUsecaseParamsSortBy.original_title_asc:
      case DiscoverMoviesUsecaseParamsSortBy.original_title_desc:
      case DiscoverMoviesUsecaseParamsSortBy.popularity_asc:
      case DiscoverMoviesUsecaseParamsSortBy.popularity_desc:
      case DiscoverMoviesUsecaseParamsSortBy.primary_release_date_asc:
      case DiscoverMoviesUsecaseParamsSortBy.primary_release_date_desc:
      case DiscoverMoviesUsecaseParamsSortBy.revenue_asc:
      case DiscoverMoviesUsecaseParamsSortBy.revenue_desc:
      case DiscoverMoviesUsecaseParamsSortBy.title_asc:
      case DiscoverMoviesUsecaseParamsSortBy.title_desc:
      case DiscoverMoviesUsecaseParamsSortBy.vote_average_asc:
      case DiscoverMoviesUsecaseParamsSortBy.vote_average_desc:
      case DiscoverMoviesUsecaseParamsSortBy.vote_count_asc:
      case DiscoverMoviesUsecaseParamsSortBy.vote_count_desc:
        break;

      default:
        invariant(false, "Invalid sort_by value");
    }

    // we wont allow adult content in this app
    invariant(!params.include_adult, "Adult content is not allowed");

    // we wont allow videos in this app
    invariant(!params.include_video, "Videos are not allowed");

    // validate language against ISO 639-1

    const regex = /^[a-z]{2}-[A-Z]{2}$/;

    invariant(
      params.language.length === 5 && regex.test(params.language),
      "Invalid language, should ve in ISO 639-1 format"
    );

    return this.discoverFactory().execute(params);
  }
}
