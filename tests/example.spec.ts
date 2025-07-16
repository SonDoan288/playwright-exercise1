import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a text.
  await expect(page.getByText('Tài liệu học automation test')).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the link with text "Bài học 1: Register Page"
  await page.locator('text=Bài học 1: Register Page').click();

  // Create a variable and find all heading in page, find the heading with correct text 
  const heading = page.locator('h1, h2', { hasText: 'User Registration' });

  // Expects page to have a heading with the name of User Registration.
  await expect(heading).toHaveText('User Registration');
});
