import { test, expect } from "@playwright/test";
import { registerUser } from "../helpers/registercommand";

const name = "Tuffour";

test("login user", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Login or register" }).click();
  await page.locator('input[name="loginname"]').fill("Ranchodat");
  await page.locator("#loginFrm_password").fill("Boateng@123dat");
  await page.getByRole('button', {name: 'Login'}).click()
  await expect(page).toHaveURL(
    "https://automationteststore.com/index.php?rt=account/account"
  );
});


