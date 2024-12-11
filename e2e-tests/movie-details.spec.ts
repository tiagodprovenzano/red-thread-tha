import { test, expect, Locator } from "@playwright/test";

test("when clicking on a movie, should navigate to that movie details", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");

  // waiting for movies to be displayed
  await page.waitForSelector(".movie-item-container", { state: "visible" });

  const movies: Locator[] = await page.getByTestId("movie").all();
  await expect(movies.length).not.toBe(0);
  const movie: Locator = movies[0];
  await expect(movie).not.toBeNull();
  await (movie as Locator).click();
  const header = await page.getByTestId("header");
  await expect(header).toContainText("Movie details");
});

test("when on a movie page, should display movie title", async ({ page }) => {
  await page.goto("http://localhost:5173/movies/912649");
  const movieTitle = await page.getByTestId("movie-title");
  await expect(movieTitle).toBeVisible();
  await expect(movieTitle).toContainText("Venom: The Last Dance");
});

test("when on a movie page, should display movie published year", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/movies/912649");
  const moviePublishedYear = await page.getByTestId(
    "movie-title-published-year"
  );
  await expect(moviePublishedYear).toBeVisible();
  await expect(moviePublishedYear).toContainText("2024");
});

test("when on a movie page, should display movie runtime", async ({ page }) => {
  await page.goto("http://localhost:5173/movies/912649");
  const runtime = await page.getByTestId("movie-runtinme");
  await expect(runtime).toBeVisible();
  await expect(runtime).toContainText("109 mins");
});

test("when on a movie page, should display movie score", async ({ page }) => {
  await page.goto("http://localhost:5173/movies/912649");
  const score = await page.getByTestId("movie-score");
  await expect(score).toBeVisible();
  await expect(score).toContainText("/10");
});

test("when on a movie page, should display an add to favorite button", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/movies/912649");
  const addToFavorite = await page.getByTestId("add-to-favorite");
  await expect(addToFavorite).toBeVisible();
});
test("when on a movie page, should display movie poster", async ({ page }) => {
  await page.goto("http://localhost:5173/movies/912649");
  const poster = await page.getByTestId("movie-poster");
  await expect(poster).toBeVisible();
});

test("when on a movie page, should display movie overview", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/movies/912649");
  const overview = await page.getByTestId("movie-overview");
  await expect(overview).toBeVisible();
});

test("when on a movie page, should display movie trailers", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/movies/912649");
  const trailers = await page.getByTestId("movie-trailers");
  await expect(trailers).toBeVisible();
});

test("when clicking on a trailer should either go to youtube or google", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/movies/912649");
  await page.waitForSelector(".trailer", { state: "attached" });
  const trailers: Locator[] = await page.getByTestId("trailer-item").all();
  await expect(trailers.length).not.toBe(0);
  const trailer: Locator = trailers[0];
  await expect(trailer).not.toBeNull();
  await (trailer as Locator).click();
  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    trailer.click(),
  ]);

  await newPage.waitForLoadState();
  const url = newPage.url();
  await expect(url).toMatch(/(youtube\.com|google\.com)/);
});
