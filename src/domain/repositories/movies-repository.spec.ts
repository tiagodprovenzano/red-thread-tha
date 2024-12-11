import { expect, describe, vi, it, beforeEach } from "vitest";
import { MoviesRepository } from "./movies-repository";
import {
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseParamsSortBy,
  DiscoverMoviesUsecaseResult,
} from "@/model";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const executeMock = vi.fn((_params: DiscoverMoviesUsecaseParams) => {
  return new Promise((resolve) => {
    resolve({
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
          genre_ids: [28, 878, 12],
          id: 912649,
          original_language: "en",
          original_title: "Venom: The Last Dance",
          overview:
            "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
          popularity: 12656.263,
          poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
          release_date: "2024-10-22",
          title: "Venom: The Last Dance",
          video: false,
          vote_average: 6.6,
          vote_count: 1106,
        },
      ],
    });
  }) as Promise<DiscoverMoviesUsecaseResult>;
});

const makeMockedDiscoverMoviesUsecase = () => ({
  execute: executeMock,
});

describe("MoviesRepository", () => {
  beforeEach(() => {
    executeMock.mockClear();
  });
  it("discover should be defined", () => {
    const repository = new MoviesRepository();
    expect(repository.discover).toBeDefined();
  });

  it("discover should return a promise", () => {
    const repository = new MoviesRepository();
    const result = repository.discover();
    expect(result).toBeInstanceOf(Promise);
  });

  it("discover should return a result", async () => {
    const repository = new MoviesRepository({
      discoverFactory: makeMockedDiscoverMoviesUsecase,
    });
    const result = await repository.discover();
    expect(executeMock).toHaveBeenCalledTimes(1);
    expect(executeMock).toHaveBeenCalledWith({
      include_adult: false,
      include_video: false,
      language: "en-US",
      sort_by: "popularity.desc",
    });
    expect(result.results[0].id).toEqual(912649);
  });

  it("should throw an error if adult content is included", async () => {
    const repository = new MoviesRepository({
      discoverFactory: makeMockedDiscoverMoviesUsecase,
    });
    expect(() =>
      repository.discover({
        include_adult: true,
        include_video: false,
        language: "en-US",
        sort_by: DiscoverMoviesUsecaseParamsSortBy.primary_release_date_desc,
      })
    ).toThrowError("Adult content is not allowed");
    expect(executeMock).toHaveBeenCalledTimes(0);
  });
  it("should throw an error if video content is included", async () => {
    const repository = new MoviesRepository({
      discoverFactory: makeMockedDiscoverMoviesUsecase,
    });
    expect(() =>
      repository.discover({
        include_adult: false,
        include_video: true,
        language: "en-US",
        sort_by: DiscoverMoviesUsecaseParamsSortBy.primary_release_date_desc,
      })
    ).toThrowError("Videos are not allowed");
    expect(executeMock).toHaveBeenCalledTimes(0);
  });
  it("sort should be part of the enum", async () => {
    const repository = new MoviesRepository({
      discoverFactory: makeMockedDiscoverMoviesUsecase,
    });
    expect(() =>
      repository.discover({
        include_adult: false,
        include_video: false,
        language: "en-US",
        sort_by: "any string" as DiscoverMoviesUsecaseParamsSortBy,
      })
    ).toThrowError("Invalid sort_by value");
    expect(executeMock).toHaveBeenCalledTimes(0);
  });

  it("language should be ISO 639-1 formated", async () => {
    const repository = new MoviesRepository({
      discoverFactory: makeMockedDiscoverMoviesUsecase,
    });
    expect(() =>
      repository.discover({
        include_adult: false,
        include_video: false,
        language: "enNUS",
        sort_by: DiscoverMoviesUsecaseParamsSortBy.popularity_desc,
      })
    ).toThrowError("Invalid language, should ve in ISO 639-1 format");
    expect(() =>
      repository.discover({
        include_adult: false,
        include_video: false,
        language: "En-US",
        sort_by: DiscoverMoviesUsecaseParamsSortBy.popularity_desc,
      })
    ).toThrowError("Invalid language, should ve in ISO 639-1 format");
    expect(() =>
      repository.discover({
        include_adult: false,
        include_video: false,
        language: "en-us",
        sort_by: DiscoverMoviesUsecaseParamsSortBy.popularity_desc,
      })
    ).toThrowError("Invalid language, should ve in ISO 639-1 format");
    expect(() =>
      repository.discover({
        include_adult: false,
        include_video: false,
        language: "pt-BR",
        sort_by: DiscoverMoviesUsecaseParamsSortBy.popularity_desc,
      })
    ).not.toThrowError("Invalid language, should ve in ISO 639-1 format");
    expect(executeMock).toHaveBeenCalledTimes(1);
  });
});
