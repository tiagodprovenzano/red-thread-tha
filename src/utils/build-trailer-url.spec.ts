import { buildTrailerUrl } from "./build-trailer-url";
import { describe, it, expect } from "vitest";
describe("buildTrailerUrl", () => {
  it("should return YouTube URL when site is YouTube", () => {
    const site = "YouTube";
    const key = "abc123";
    const result = buildTrailerUrl(site, key);
    expect(result).toBe("https://www.youtube.com/watch?v=abc123");
  });

  it("should return Google search URL when site is not YouTube", () => {
    const site = "Vimeo";
    const key = "xyz789";
    const result = buildTrailerUrl(site, key);
    expect(result).toBe("https://www.google.com/search?q=Vimeo+xyz789+trailer");
  });

  it("should throw an error when site is empty", () => {
    const site = "";
    const key = "abc123";
    expect(() => buildTrailerUrl(site, key)).toThrow("site is required");
  });

  it("should throw an error when key is empty", () => {
    const site = "YouTube";
    const key = "";
    expect(() => buildTrailerUrl(site, key)).toThrow("key is required");
  });

  it("should throw an error when site is undefined", () => {
    expect(() => buildTrailerUrl(undefined as any, "abc123")).toThrow(
      "site is required"
    );
  });

  it("should throw an error when key is undefined", () => {
    expect(() => buildTrailerUrl("YouTube", undefined as any)).toThrow(
      "key is required"
    );
  });
});
