import invariant from "tiny-invariant";

export const buildTrailerUrl = (site: string, key: string) => {
  invariant(site, "site is required");
  invariant(key, "key is required");

  if (site === "YouTube") {
    return `https://www.youtube.com/watch?v=${key}`;
  } else {
    return `https://www.google.com/search?q=${site}+${key}+trailer`;
  }
};
