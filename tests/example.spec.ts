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


test('shows error on invalid login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('invalid');
});