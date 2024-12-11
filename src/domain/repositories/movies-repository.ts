import {
  makeDiscoverMoviesUsecase,
  makeGetSingleMovieUsecase,
} from "@/factories/usecases";
import {
  DiscoverMoviesUsecase,
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseResult,
  GetSingleMovieUsecase,
  GetSingleMovieUsecaseParams,
  GetSingleMovieUsecaseResult,
} from "@/model";
import { IMoviesRepository } from "@/model/repositories/movies-repository";
import invariant from "tiny-invariant";

export class MoviesRepository implements IMoviesRepository {
  private discoverFactory: () => DiscoverMoviesUsecase;
  private getSingleFactory: () => GetSingleMovieUsecase;
  constructor(factories?: {
    discoverFactory?: () => DiscoverMoviesUsecase;
    getSingleFactory?: () => GetSingleMovieUsecase;
  }) {
    this.discoverFactory =
      factories?.discoverFactory ?? makeDiscoverMoviesUsecase;
    this.getSingleFactory =
      factories?.getSingleFactory ?? makeGetSingleMovieUsecase;
  }

  discover(
    params: DiscoverMoviesUsecaseParams = {
      language: "en-US",
      page: 1,
      region: "US",
    }
  ): Promise<DiscoverMoviesUsecaseResult> {
    // validate language against ISO 639-1
    const regex = /^[a-z]{2}-[A-Z]{2}$/;
    invariant(
      params.language.length === 5 && regex.test(params.language),
      "Invalid language, should ve in ISO 639-1 format"
    );

    // validate region against ISO 3166-1
    invariant(
      params.region.length === 2 &&
        params.region === params.region.toUpperCase(),
      "Invalid region, should be in ISO 3166-1 format"
    );

    return this.discoverFactory().execute(params);
  }

  getSingle(
    params: GetSingleMovieUsecaseParams
  ): Promise<GetSingleMovieUsecaseResult> {
    return this.getSingleFactory().execute(params);
  }
}
