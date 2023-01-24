import { test, expect } from "@playwright/test";

test("homepage has title and links to intro page", async ({ page }) => {
  await page.goto("/");
  const pageTitle = await page.locator('img[title="Automation Test Store"]');
  expect(pageTitle).toBeTruthy;
});
