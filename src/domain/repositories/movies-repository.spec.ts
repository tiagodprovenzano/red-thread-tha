import { expect, describe, vi, it, beforeEach } from "vitest";
import { MoviesRepository } from "./movies-repository";
import {
  DiscoverMoviesUsecaseParams,
  DiscoverMoviesUsecaseResult,
  GetSingleMovieUsecaseParams,
  GetSingleMovieUsecaseResult,
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

const executeGetSingleMovieMock = vi.fn(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_params: GetSingleMovieUsecaseParams) => {
    return new Promise((resolve) => {
      resolve({
        adult: false,
        backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
        belongs_to_collection: {
          id: 558216,
          name: "Venom Collection",
          poster_path: "/4bXIKqdZIjR8wKgZaGDaLhLj4yF.jpg",
          backdrop_path: "/vq340s8DxA5Q209FT8PHA6CXYOx.jpg",
        },
        budget: 120000000,
        genres: [
          {
            id: 28,
            name: "Action",
          },
          {
            id: 878,
            name: "Science Fiction",
          },
          {
            id: 12,
            name: "Adventure",
          },
        ],
        homepage: "https://venom.movie",
        id: 912649,
        imdb_id: "tt16366836",
        origin_country: ["US"],
        original_language: "en",
        original_title: "Venom: The Last Dance",
        overview:
          "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        popularity: 12413.089,
        poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
        production_companies: [
          {
            id: 5,
            logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
            name: "Columbia Pictures",
            origin_country: "US",
          },
          {
            id: 84041,
            logo_path: "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
            name: "Pascal Pictures",
            origin_country: "US",
          },
          {
            id: 53462,
            logo_path: "/nx8B3Phlcse02w86RW4CJqzCnfL.png",
            name: "Matt Tolmach Productions",
            origin_country: "US",
          },
          {
            id: 91797,
            logo_path: null,
            name: "Hutch Parker Entertainment",
            origin_country: "US",
          },
          {
            id: 14439,
            logo_path: null,
            name: "Arad Productions",
            origin_country: "US",
          },
        ],
        production_countries: [
          {
            iso_3166_1: "US",
            name: "United States of America",
          },
        ],
        release_date: "2024-10-22",
        revenue: 468513700,
        runtime: 109,
        spoken_languages: [
          {
            english_name: "English",
            iso_639_1: "en",
            name: "English",
          },
        ],
        status: "Released",
        tagline: "'Til death do they part.",
        title: "Venom: The Last Dance",
        video: false,
        vote_average: 6.663,
        vote_count: 1237,
      });
    }) as Promise<GetSingleMovieUsecaseResult>;
  }
);

const makeGetSingleMovieUsecase = () => ({
  execute: executeGetSingleMovieMock,
});

describe("MoviesRepository discover popular movies", () => {
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
      language: "en-US",
      region: "US",
      page: 1,
    });
    expect(result.results[0].id).toEqual(912649);
  });

  it("language should be ISO 639-1 formated", async () => {
    const repository = new MoviesRepository({
      discoverFactory: makeMockedDiscoverMoviesUsecase,
    });
    expect(() =>
      repository.discover({
        region: "US",
        page: 1,
        language: "enNUS",
      })
    ).toThrowError("Invalid language, should ve in ISO 639-1 format");
    expect(() =>
      repository.discover({
        region: "US",
        page: 1,
        language: "En-US",
      })
    ).toThrowError("Invalid language, should ve in ISO 639-1 format");
    expect(() =>
      repository.discover({
        region: "US",
        page: 1,
        language: "en-us",
      })
    ).toThrowError("Invalid language, should ve in ISO 639-1 format");
    expect(() =>
      repository.discover({
        language: "pt-BR",
        region: "US",
        page: 1,
      })
    ).not.toThrowError("Invalid language, should ve in ISO 639-1 format");
    expect(executeMock).toHaveBeenCalledTimes(1);
  });
});

describe("MovieRepository get single movie", () => {
  beforeEach(() => {
    executeGetSingleMovieMock.mockClear();
  });
  it("getSingle should be defined", () => {
    const repository = new MoviesRepository();
    expect(repository.getSingle).toBeDefined();
  });

  it("getSingle should return a promise and call execute fn", () => {
    const repository = new MoviesRepository({
      getSingleFactory: makeGetSingleMovieUsecase,
    });
    const result = repository.getSingle({
      movie_id: 912649,
    });
    expect(result).toBeInstanceOf(Promise);
    expect(executeGetSingleMovieMock).toHaveBeenCalledTimes(1);
  });
});
