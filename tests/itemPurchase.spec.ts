import { test, expect } from "@playwright/test";
import { userLogin } from "../helpers/logincommand";

test.describe("testing item purchases on the platform", () => {
  test("purchase ladies shoes", async ({ page }) => {
    await userLogin(page);
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Apparel & accessories" })
      .hover();
    await page.getByRole("link", { name: "Shoes" }).click();
    await page.locator(".thumbnail > a").first().click();
    await page.getByLabel("3 UK").check();
    await page.getByRole("link", { name: "Add to Cart" }).click();
    await page.locator("#cart_checkout1").click();
    await page.locator("#checkout_btn").click();
    expect(page.getByText("Your Order Has Been Processed!")).toBeVisible();
  });

  test.only("purchase men shirts", async ({ page }) => {
    await userLogin(page);
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Apparel & accessories" })
      .hover();
    await page.getByRole("link", { name: "T-shirts" }).click();
    await page.locator("div:nth-child(3) > .thumbnail > a").click();
    await page.getByRole("link", { name: " Add to Cart" }).click();
    await page.locator("#cart_checkout2").click();
    await page.getByRole("button", { name: " Confirm Order" }).click();
    expect(page.getByText("Your Order Has Been Processed!")).toBeVisible();
  });
});
