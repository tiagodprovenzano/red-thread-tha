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
