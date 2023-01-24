import { test, expect } from "@playwright/test";

test.only("should reset password when password is forgotten", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator('//*[@id="main_menu_top"]/li[2]/a/span').hover()
  await page.getByRole('link', {name: 'Login'}).nth(1).click()
  expect(page).toHaveURL(
    "https://automationteststore.com/index.php?rt=account/login"
  );
  await page.getByRole('link', {name: 'Forgot your password?'}).click();
  expect(page).toHaveURL(
    "https://automationteststore.com/index.php?rt=account/forgotten/password"
  );
  await page.locator("#forgottenFrm_loginname").fill("Boateng24");
  await page.locator("#forgottenFrm_email").fill("tuffourboateng2@gmail.com");
  await page.getByRole("button", {name: "Continue"}).click()
  expect(
     page.getByText('× Success: Password reset link has been sent to your e-mail address.')
  ).toBeVisible();
});
