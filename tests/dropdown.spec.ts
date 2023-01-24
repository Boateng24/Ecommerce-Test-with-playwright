import { test, expect } from "@playwright/test";

test.describe("Drop down list", () => {
  // Accessories
  test("test accessories drop down lists", async ({ page }) => {
    page.goto("/");
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Apparel & accessories" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Shoes" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Apparel & accessories" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "T-Shirts" })
      .click();
  });

  // Make up
  test("test makeup drop down lists", async ({ page }) => {
    page.goto("/");
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Makeup" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Cheeks" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Makeup" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Eyes" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Makeup" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Face" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Makeup" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Lips" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Makeup" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Nails" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Makeup" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Value Sets" })
      .click();
  });

  // Skin care
  test("test  skin care drop down lists", async ({ page }) => {
    page.goto("/");
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Skincare" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Eyes" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Skincare" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Face" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Skincare" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Gift Ideas & Sets" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Skincare" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Hands & Nails" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Skincare" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Sun" })
      .click();
  });

  // Fragrance
  test("test fragrance drop down lists", async ({ page }) => {
    page.goto("/");
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Fragrance" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Men" })
      .nth(0)
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Fragrance" })
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Women" })
      .nth(0)
      .click();
  });

  // Men
  test("test men drop down lists", async ({ page }) => {
    page.goto("/");
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Men" })
      .nth(0)
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Body & Shower" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Men" })
      .nth(0)
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Fragrance Sets" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Men" })
      .nth(0)
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Pre-Shave & Shaving" })
      .click();

    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Men" })
      .nth(0)
      .hover();
    await page
      .locator("#categorymenu")
      .getByRole("link", { name: "Skincare" }).nth(1)
      .click();

  })
    //   Hair Care
    test("test Hair Care drop down lists", async ({ page }) => {
      page.goto("/");
      await page
        .locator("#categorymenu")
        .getByRole("link", { name: "Hair Care" })
        .hover();
      await page
        .locator("#categorymenu")
        .getByRole("link", { name: "Conditioner" })
        .click();

      await page
        .locator("#categorymenu")
        .getByRole("link", { name: "Hair Care" })
        .hover();
      await page
        .locator("#categorymenu")
        .getByRole("link", { name: "Shampoo" })
        .click();
    });

    // Books
    test("test Books drop down lists", async ({ page }) => {
      page.goto("/");
      await page
        .locator("#categorymenu")
        .getByRole("link", { name: "Books" })
        .hover();
      await page
        .locator("#categorymenu")
        .getByRole("link", { name: "Audio CD" })
        .click();

      await page
        .locator("#categorymenu")
        .getByRole("link", { name: "Books" })
        .hover();
      await page
        .locator("#categorymenu")
        .getByRole("link", { name: "Paperback" })
        .click();
    });
  });

