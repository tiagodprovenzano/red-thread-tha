export enum DiscoverMoviesUsecaseParamsSortBy {
  original_title_asc = "original_title.asc",
  original_title_desc = "original_title.desc",
  popularity_asc = "popularity.asc",
  popularity_desc = "popularity.desc",
  revenue_asc = "revenue.asc",
  revenue_desc = "revenue.desc",
  primary_release_date_asc = "primary_release_date.asc",
  primary_release_date_desc = "primary_release_date.desc",
  title_asc = "title.asc",
  title_desc = "title.desc",
  vote_average_asc = "vote_average.asc",
  vote_average_desc = "vote_average.desc",
  vote_count_asc = "vote_count.asc",
  vote_count_desc = "vote_count.desc",
}

/**
 * @typedef DiscoverMoviesUsecaseParams
 * @property {number} page defaults to 1
 * @property {string} language defaults to 'en-US'
 * @property {string} region iso-3166-1 code defaults to 'US'
 */
export type DiscoverMoviesUsecaseParams = {
  language: string;
  page: number;
  region: string;
};
