// @ts-check
import { test, expect } from '@playwright/test';



test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/');

    // Check for the Pokemon name 'ivysaur' (must be lowercase as per instructions).
    await expect(page.getByText('ivysaur')).toBeVisible();

    // Check for the copyright text at the bottom of the page.
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible();
  });

  // Test 2: Ensures a user can navigate from the main page to a detail page.
  test('ivysaur page can be navigated to and displays content', async ({ page }) => {
    await page.goto('/');

    // 1. Click the link/element associated with 'ivysaur'.
    // We look for a link role with the exact text 'ivysaur'.
    // If your app uses cards/buttons instead of standard links, you might need to adjust this selector.
    await page.getByRole('link', { name: 'ivysaur', exact: true }).click();
    
    // Optional: Check the URL changed to include the specific Pokemon name
    await expect(page).toHaveURL(/.*\/ivysaur/);

    // 2. Check for unique content on the detail page: 'chlorophyll'.
    // The ability name must be tested in lowercase.
    await expect(page.getByText('chlorophyll')).toBeVisible();
  });
});
