export const registerUser = async (page) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Login or register" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.locator('input[name="firstname"]').fill("Tuffour");
  await page.locator('input[name="lastname"]').fill("Boateng");
  await page.locator("#AccountFrm_email").fill("boateng@gmail.com");
  await page.locator('input[name="telephone"]').fill("0533809899");
  await page.locator('input[name="fax"]').fill("555-123-4567");
  await page.locator('input[name="company"]').fill("SuperGen Technologies");
  await page.locator('input[name="address_1"]').fill("superGen street 1");
  await page.locator('input[name="city"]').fill("Kumasi Garden City");
  //   await page.locator('select[name="zone_id"]').click();
  await page.locator('select[name="zone_id"]').selectOption("3513");
  await page.locator('input[name="postcode"]').fill("0023");
  await page.locator('select[name="zone_id"]').click();
  await page.locator('select[name="country_id"]').selectOption("82");
  await page.locator("#AccountFrm_loginname").fill("Ranchodat");
  await page.locator("#AccountFrm_password").fill("Boateng@123dat");
  await page.locator("#AccountFrm_confirm").fill("Boateng@123dat");
  await page.locator("#AccountFrm_newsletter1").check();
  await page.getByLabel("I have read and agree to the Privacy Policy").check();
  await page.getByRole("button", { name: "Continue" }).click();
};