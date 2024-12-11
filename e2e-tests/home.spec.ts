import { test, expect } from "@playwright/test";

test("To have title 'Pop Movies'", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle("Pop Movies");
});

test("To have a header with the name of 'Pop Movies'", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const header = await page.getByTestId("header");
  await expect(header).toBeVisible();
  await expect(header).toContainText("Pop Movies");
});
test("To have movies diplayed", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // select all movies
  await page.waitForSelector(".movie-item-container", { state: "visible" });
  const moviesTestIds = await page.getByTestId("movie").all();
  // check if there are movies
  await expect(moviesTestIds.length).not.toBe(0);
});
