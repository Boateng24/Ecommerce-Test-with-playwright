export const userLogin = async (page) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Login or register" }).click();
  await page.locator('input[name="loginname"]').fill("Ranchodat");
  await page.locator("#loginFrm_password").fill("Boateng@123dat");
  await page.getByRole('button', {name: 'Login'}).click()
}