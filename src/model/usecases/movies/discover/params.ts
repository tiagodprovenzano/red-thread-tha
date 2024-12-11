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
