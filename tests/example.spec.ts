import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
});


test('checkbox can be checked', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const firstCheckbox = page.locator('input[type="checkbox"]').first();
  await firstCheckbox.check();
  await expect(firstCheckbox).toBeChecked();
});


import { LoginPage } from '../pages/LoginPage';

test('shows error on invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wronguser', 'wrongpass');
  await expect(loginPage.flashMessage).toContainText('invalid');
});